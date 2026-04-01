import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

const TEXT   = '#0B1F3A';
const MUTED  = '#5B7A99';
const ACCENT = '#2563EB';
const BG_ALT = '#f8fafc';
const BORDER = 'rgba(11,31,58,0.08)';
const SHADOW = '0 2px 16px rgba(11,31,58,0.06), 0 1px 4px rgba(11,31,58,0.04)';
const SHADOW_H = '0 20px 60px rgba(11,31,58,0.10), 0 4px 16px rgba(37,99,235,0.08)';

const ease = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

const CATEGORIES = ['All', 'Business Setup', 'Compliance', 'Tax & GST', 'Global Expansion', 'Startup'];

const POSTS = [
  {
    tag: 'Business Setup',
    title: 'How to Register a Private Limited Company in India: 2024 Complete Guide',
    excerpt: 'Everything you need to know about Pvt Ltd registration — from DSC to Certificate of Incorporation — in one comprehensive walkthrough.',
    readTime: '8 min read',
    date: 'Mar 18, 2024',
    color: '#2563EB',
  },
  {
    tag: 'Global Expansion',
    title: 'Singapore vs UAE vs UK: Which Jurisdiction is Best for Your Startup?',
    excerpt: 'A side-by-side comparison of three of the most popular global incorporation destinations — tax, compliance, banking, and ease of doing business.',
    readTime: '12 min read',
    date: 'Mar 12, 2024',
    color: '#0ea5e9',
  },
  {
    tag: 'Tax & GST',
    title: 'GST Annual Return (GSTR-9): Filing Guide for FY 2023-24',
    excerpt: 'Step-by-step walkthrough of GSTR-9 with common mistakes to avoid, reconciliation tips, and late fee calculations.',
    readTime: '10 min read',
    date: 'Mar 5, 2024',
    color: '#10b981',
  },
  {
    tag: 'Compliance',
    title: 'Annual ROC Compliance Checklist for Private Limited Companies',
    excerpt: 'Every filing your company is required to complete in a financial year — deadlines, forms, penalties, and a printable checklist.',
    readTime: '7 min read',
    date: 'Feb 28, 2024',
    color: '#8b5cf6',
  },
  {
    tag: 'Startup',
    title: 'Startup India Registration: Benefits, Eligibility & How to Apply',
    excerpt: 'A founder\'s guide to getting DPIIT recognition and unlocking tax exemptions, funding access, and fast-track IP protection.',
    readTime: '9 min read',
    date: 'Feb 20, 2024',
    color: '#f59e0b',
  },
  {
    tag: 'Global Expansion',
    title: 'Delaware C-Corp vs LLC: What Indian Founders Need to Know',
    excerpt: 'Choosing the right US entity type impacts your funding rounds, tax obligations, and exit options. Here\'s what the data shows.',
    readTime: '11 min read',
    date: 'Feb 14, 2024',
    color: '#ef4444',
  },
];

export function Blog() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* Hero */}
      <section className="pt-36 pb-20 relative" style={{ background: BG_ALT }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(37,99,235,0.05) 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{ background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.15)' }}>
              <BookOpen className="w-3.5 h-3.5" style={{ color: ACCENT }} />
              <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>Insights & Resources</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-bold leading-[1.08] tracking-tight mb-5" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: TEXT }}>
              Expert Insights on{' '}
              <span className="font-serif italic" style={{ color: ACCENT }}>Business & Compliance</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg leading-relaxed" style={{ color: MUTED }}>
              Practical guides, regulatory updates, and strategic advice from BSG's team of CAs, CSs, and compliance experts.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-8" style={{ background: '#ffffff', borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  background: i === 0 ? ACCENT : 'transparent',
                  color: i === 0 ? '#ffffff' : MUTED,
                  border: i === 0 ? 'none' : `1px solid ${BORDER}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {POSTS.map((post) => (
              <motion.article
                key={post.title}
                variants={fadeUp}
                className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 cursor-pointer group"
                style={{ background: '#ffffff', border: `1px solid ${BORDER}`, boxShadow: SHADOW }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = SHADOW_H)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = SHADOW)}
              >
                {/* Color band */}
                <div className="h-1.5 w-full" style={{ background: post.color }} />

                <div className="p-7 flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full"
                      style={{ background: `${post.color}12`, color: post.color, border: `1px solid ${post.color}22` }}
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {post.tag}
                    </span>
                  </div>

                  <h2 className="text-base font-bold leading-snug mb-3 group-hover:text-blue-600 transition-colors" style={{ color: TEXT }}>
                    {post.title}
                  </h2>

                  <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: MUTED }}>
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-5" style={{ borderTop: `1px solid ${BORDER}` }}>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: MUTED }}>
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                      <span className="mx-1">·</span>
                      {post.date}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold transition-colors" style={{ color: ACCENT }}>
                      Read <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20" style={{ background: BG_ALT }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)' }}>
              <BookOpen className="w-5 h-5" style={{ color: ACCENT }} />
            </div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: TEXT }}>Stay Ahead of Compliance</h2>
            <p className="text-sm mb-8" style={{ color: MUTED }}>
              Get our monthly digest of regulatory updates, filing deadlines, and expert insights — directly in your inbox.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
              style={{ background: ACCENT, boxShadow: '0 4px 24px rgba(37,99,235,0.35)' }}
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
