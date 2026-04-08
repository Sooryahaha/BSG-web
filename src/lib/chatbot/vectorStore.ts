import kbData from '@/data/knowledge_base.json';

export interface Chunk {
  id: string;
  page: string;
  page_slug: string;
  navigation_path: string;
  section: string;
  content: string;
  url: string;
  headings: string[];
}

export interface ScoredChunk {
  chunk: Chunk;
  score: number;
}

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'is', 'it', 'its', 'be', 'as', 'by', 'we', 'do', 'if', 'so',
  'up', 'me', 'my', 'no', 'he', 'she', 'they', 'we', 'you', 'i',
  'what', 'how', 'when', 'where', 'which', 'who', 'that', 'this',
  'are', 'was', 'were', 'has', 'have', 'had', 'will', 'would', 'could',
  'should', 'can', 'may', 'might', 'must', 'shall', 'with', 'from',
  'not', 'also', 'more', 'than', 'then', 'into',
]);

class VectorStore {
  chunks: Chunk[] = [];
  tfidfMatrix: Record<string, number>[] = [];
  vocabulary: Record<string, number> = {};
  idf: Float32Array = new Float32Array(0);
  isBuilt: boolean = false;

  constructor() {
    this.chunks = [];
  }

  loadChunks() {
    // Read directly from the imported JSON
    this.chunks = kbData as Chunk[];
  }

  tokenize(text: string): string[] {
    return text
      .toLowerCase()
      .replace(/[^\w\s₹]/g, ' ')
      .split(/\s+/)
      .filter((t) => t.length > 1 && !STOP_WORDS.has(t));
  }

  build() {
    this.loadChunks();

    // Prepare documents: content + section + page for richer matching
    const docs = this.chunks.map((c) =>
      `${c.page} ${c.navigation_path} ${c.section} ${c.content} ${(c.headings || []).join(' ')}`
    );

    // Build vocabulary
    const vocabSet = new Set<string>();
    const tokenizedDocs = docs.map((d) => {
      const tokens = this.tokenize(d);
      tokens.forEach((t) => vocabSet.add(t));
      return tokens;
    });

    this.vocabulary = {};
    [...vocabSet].forEach((term, i) => {
      this.vocabulary[term] = i;
    });

    const vocabSize = Object.keys(this.vocabulary).length;
    const N = docs.length;

    // Compute IDF
    const df = new Float32Array(vocabSize);
    tokenizedDocs.forEach((tokens) => {
      const seen = new Set(tokens);
      seen.forEach((t) => {
        const idx = this.vocabulary[t];
        if (idx !== undefined) df[idx]++;
      });
    });
    this.idf = new Float32Array(vocabSize);
    for (let i = 0; i < vocabSize; i++) {
      this.idf[i] = Math.log((N + 1) / (df[i] + 1)) + 1;
    }

    // Compute TF-IDF vectors
    this.tfidfMatrix = tokenizedDocs.map((tokens) => {
      const tf: Record<string, number> = {};
      tokens.forEach((t) => {
        tf[t] = (tf[t] || 0) + 1;
      });
      const vec: Record<string, number> = {};
      Object.entries(tf).forEach(([term, count]) => {
        const idx = this.vocabulary[term];
        if (idx !== undefined) {
          vec[idx] = (count / tokens.length) * this.idf[idx];
        }
      });
      return vec;
    });

    this.isBuilt = true;
  }

  cosineSim(vecA: Record<string, number>, vecB: Record<string, number>): number {
    let dot = 0;
    let normA = 0;
    let normB = 0;
    Object.entries(vecA).forEach(([k, v]) => {
      normA += v * v;
      if (vecB[k]) dot += v * vecB[k];
    });
    Object.entries(vecB).forEach(([, v]) => {
      normB += v * v;
    });
    if (normA === 0 || normB === 0) return 0;
    return dot / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  vectoriseQuery(query: string) {
    const tokens = this.tokenize(query);
    const tf: Record<string, number> = {};
    tokens.forEach((t) => {
      tf[t] = (tf[t] || 0) + 1;
    });
    const vec: Record<string, number> = {};
    Object.entries(tf).forEach(([term, count]) => {
      const idx = this.vocabulary[term];
      if (idx !== undefined) {
        vec[idx] = (count / tokens.length) * this.idf[idx];
      }
    });
    return vec;
  }

  search(query: string, k = 5, threshold = 0.06): ScoredChunk[] {
    if (!this.isBuilt) this.build();

    const expandedQuery = expandQuery(query);
    const queryVec = this.vectoriseQuery(expandedQuery);

    const scored = this.tfidfMatrix.map((docVec, i) => ({
      chunk: this.chunks[i],
      score: this.cosineSim(queryVec, docVec),
    }));

    scored.sort((a, b) => b.score - a.score);

    const results = scored
      .slice(0, k * 3)
      .filter((r) => r.score >= threshold)
      .slice(0, k);

    return results;
  }
}

function expandQuery(query: string): string {
  const expansions: Record<string, string> = {
    'pvt ltd': 'private limited company',
    'private limited': 'private limited company registration',
    'gst': 'gst registration goods service tax',
    'gstin': 'gst registration gstin',
    'llp': 'limited liability partnership',
    'opc': 'one person company',
    'msme': 'msme udyam registration',
    'dsc': 'digital signature certificate',
    'din': 'director identification number',
    'director': 'director company compliance',
    'startup': 'startup india registration',
    'nda': 'non disclosure agreement',
    'sha': 'shareholders agreement',
    'wos': 'wholly owned subsidiary',
    'dubai': 'company incorporation dubai',
    'singapore': 'company incorporation singapore',
    'uk': 'company incorporation uk',
    'usa': 'company incorporation usa',
    'thailand': 'company incorporation thailand',
    'register company': 'private limited company registration process',
    'open company': 'private limited company incorporation',
    'start company': 'private limited company sole proprietorship',
    'close company': 'winding up company closing',
    'close llp': 'closing llp form 24',
    'income tax': 'income tax filing returns',
    'itr': 'income tax return filing',
    'pf': 'provident fund epf registration',
    'esi': 'employee state insurance registration',
    'iec': 'import export code',
    'professional tax': 'professional tax registration',
    'share transfer': 'share transfer private limited',
    'share capital': 'increase authorised share capital',
    'name change': 'name change company compliance',
    'partnership': 'partnership firm registration',
    'proprietorship': 'sole proprietorship registration',
    'section 8': 'section 8 company ngo nonprofit',
    'producer': 'producer company registration',
    'subsidiary': 'wholly owned subsidiary foreign company',
    'branch office': 'branch office foreign company',
    'liaison office': 'liaison office foreign company',
    'talk to expert': 'contact consultation book free',
    'contact': 'contact email consultation',
    'pricing': 'consultation contact fees',
    'cost': 'consultation contact fees charges',
    'add director': 'adding director company compliance',
    'remove director': 'resignation director compliance',
    'founders agreement': 'founders agreement startup',
    'term sheet': 'term sheet startup investment',
  };

  let expanded = query.toLowerCase();
  Object.entries(expansions).forEach(([term, expand]) => {
    if (expanded.includes(term)) {
      expanded += ' ' + expand;
    }
  });
  return expanded;
}

export const store = new VectorStore();
