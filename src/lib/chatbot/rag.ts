import { store, ScoredChunk, Chunk } from './vectorStore';

export const FALLBACK_RESPONSE = {
  intent: 'unknown',
  recommended_page: null,
  navigation_path: null,
  answer: "I couldn't find this exact information. Would you like to connect with our experts via our contact page?",
  cta: '💬 Contact Us',
  cta_url: '/contact',
  confidence: 'low',
  url: null,
  contact: {
    email: 'contact@bizsetupglobal.com',
    address: '428, 1st Floor, 27th Main Rd, HSR Layout, Bengaluru',
  },
};

const CONTACT_TRIGGERS = [
  'pricing', 'price', 'cost', 'fee', 'fees', 'charges', 'how much',
  'talk to', 'speak to', 'call me', 'contact', 'human', 'agent',
  'phone', 'whatsapp', 'email', 'reach you',
];

function detectIntent(query: string): string {
  const q = query.toLowerCase();

  const intents = [
    { intent: 'Company Registration', keywords: ['register', 'incorporate', 'start company', 'open company', 'new company', 'pvt ltd', 'private limited'] },
    { intent: 'GST Registration', keywords: ['gst', 'gstin', 'goods and service tax'] },
    { intent: 'Director Management', keywords: ['director', 'add director', 'remove director', 'din'] },
    { intent: 'LLP Services', keywords: ['llp', 'limited liability partnership', 'designated partner'] },
    { intent: 'Startup Services', keywords: ['startup', 'nda', 'shareholders agreement', 'sha', 'term sheet', 'founders agreement'] },
    { intent: 'Global Incorporation', keywords: ['dubai', 'singapore', 'usa', 'uk', 'thailand', 'international', 'global', 'foreign'] },
    { intent: 'Tax Filing', keywords: ['income tax', 'itr', 'tax return', 'filing'] },
    { intent: 'Compliance Services', keywords: ['compliance', 'annual return', 'mca', 'roc'] },
    { intent: 'Registrations', keywords: ['msme', 'pf', 'esi', 'iec', 'dsc', 'professional tax', 'shop establishment'] },
    { intent: 'Contact Request', keywords: CONTACT_TRIGGERS },
    { intent: 'Winding Up', keywords: ['close', 'wind up', 'shut down', 'dissolve', 'closing llp'] },
  ];

  for (const { intent, keywords } of intents) {
    if (keywords.some(kw => q.includes(kw))) return intent;
  }

  return 'General Inquiry';
}

function isFallbackQuery(query: string) {
  const q = query.toLowerCase();
  return CONTACT_TRIGGERS.some(trigger => q.includes(trigger));
}

const BOILERPLATE_LINES = [
  'while we call you, get some insights into what you are getting into',
  'at bizsetupglobal, we provide comprehensive accounting and compliance services',
  '2025 biz setup global. all rights reserved.',
  'company business profile.',
];

function isBoilerplateLine(line: string) {
  const lower = line.toLowerCase().trim();
  return BOILERPLATE_LINES.some(b => lower.startsWith(b));
}

function formatAnswer(chunks: ScoredChunk[], query: string): string | null {
  if (!chunks || chunks.length === 0) return null;

  const seen = new Set<string>();
  const uniqueChunks = chunks.filter(c => {
    const key = c.chunk.page_slug + c.chunk.section;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const topChunk = uniqueChunks[0].chunk;
  const otherChunks = uniqueChunks.slice(1, 3);

  let answer = '';
  const primaryContent = topChunk.content;
  
  const sentences = primaryContent
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 20 && s.length < 500 && !isBoilerplateLine(s));

  if (sentences.length > 2) {
    answer += sentences.slice(0, 5).map(s => `• ${s}`).join('\n');
  } else if (sentences.length > 0) {
    answer += sentences.join(' ');
  } else {
    const cleanLines = primaryContent.split('\n')
      .filter(l => l.trim().length > 20 && !isBoilerplateLine(l));
    answer += cleanLines.slice(0, 5).map(l => `• ${l.trim()}`).join('\n');
  }

  if (otherChunks.length > 0) {
    const extra = otherChunks
      .map(c => c.chunk.content)
      .join(' ')
      .split(/(?<=[.!?])\s+/)
      .filter(s => s.length > 20 && !isBoilerplateLine(s))
      .slice(0, 3);

    if (extra.length > 0) {
      answer += '\n\n' + extra.map(s => `• ${s}`).join('\n');
    }
  }

  return answer.trim() || null;
}

function confidenceLevel(scores: ScoredChunk[]) {
  const topScore = scores[0]?.score || 0;
  if (topScore >= 0.25) return 'high';
  if (topScore >= 0.12) return 'medium';
  return 'low';
}

function buildCTA(chunk: Chunk) {
  const url = chunk.url || 'https://bsg-website-psi.vercel.app';
  const page = chunk.page.toLowerCase();

  if (page.includes('contact')) {
    return { text: '💬 Contact Us', url: '/contact' };
  }

  if (chunk.navigation_path !== 'Direct Link') {
    return { text: '📋 Book Free Consultation', url: url };
  }

  return { text: '🚀 Get Started Today', url: url };
}

export async function queryRAG(userQuery: string): Promise<any> {
  const trimmedQuery = userQuery.trim();

  if (!trimmedQuery) return FALLBACK_RESPONSE;

  const intent = detectIntent(trimmedQuery);

  if (isFallbackQuery(trimmedQuery) && intent === 'Contact Request') {
    return {
      ...FALLBACK_RESPONSE,
      intent: 'Contact Request',
      answer: "I'd be happy to connect you with our experts! You can reach out directly via our contact page.",
      cta: '💬 Contact Us',
      cta_url: '/contact',
    };
  }

  const results = store.search(trimmedQuery, 5, 0.06);

  if (results.length === 0) {
    return { ...FALLBACK_RESPONSE, intent };
  }

  const topChunk = results[0].chunk;
  const confidence = confidenceLevel(results);

  const answer = formatAnswer(results, trimmedQuery);

  if (!answer) return { ...FALLBACK_RESPONSE, intent };

  const cta = buildCTA(topChunk);

  return {
    intent,
    recommended_page: topChunk.page,
    navigation_path: topChunk.navigation_path !== 'Direct Link' ? topChunk.navigation_path : topChunk.page,
    answer,
    cta: cta.text,
    cta_url: cta.url,
    confidence,
    url: topChunk.url,
    section: topChunk.section,
    related_pages: Array.from(new Set(results.slice(1).map(r => JSON.stringify({
      page: r.chunk.page,
      url: r.chunk.url,
      nav: r.chunk.navigation_path,
    })))).map(s => JSON.parse(s)).slice(0, 3),
    contact: {
      email: 'contact@bizsetupglobal.com',
      address: '428, 1st Floor, 27th Main Rd, HSR Layout, Bengaluru',
    },
  };
}
