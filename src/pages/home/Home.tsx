import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowRight, Building2, Shield, GitBranch,
  BadgeCheck, Headphones, CheckCircle2,
  Mail, Phone, Lightbulb, FileCheck2, Settings2, Rocket,
  Receipt, Globe2,
} from 'lucide-react';

// ── Design tokens ─────────────────────────────────────────────────────────────
const BG      = '#ffffff';
const BG_ALT  = '#f1f5f9';
const BORDER  = 'rgba(11,31,58,0.08)';
const SHADOW  = '0 2px 16px rgba(11,31,58,0.06), 0 1px 4px rgba(11,31,58,0.04)';
const TEXT    = '#0B1F3A';
const MUTED   = '#5B7A99';
const ACCENT  = '#2563EB';

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};
const stagger = { 
  visible: { 
    transition: { 
      staggerChildren: 0.05,
      delayChildren: 0.05
    } 
  } 
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    }
  }
};

// ── Data ──────────────────────────────────────────────────────────────────────
const CLIENT_LOGOS = [
  'flyy.webp','ggvs.webp','grinz.webp','hamatico.webp','incture.webp',
  'indiburn.webp','kisan_supply.webp','lrelevance_ab.webp','magtik_group.webp',
  'ns_solution.webp','stock_ca-yon.webp','tathasuglobal.webp','toyama.webp','vsn_technologies.webp',
];

const EXPERTISE = [
  { icon: Building2, title: 'Company Registration',    desc: 'Swift Pvt Ltd, LLP, OPC and Sole Proprietorship incorporation with end-to-end documentation.' },
  { icon: Globe2,    title: 'Global Incorporation',    desc: 'Register in Singapore, UK, USA, Dubai and 10+ jurisdictions with expert local-law guidance.' },
  { icon: Receipt,   title: 'Tax Compliance',          desc: 'GST filings, income tax returns and ROC compliances handled with precision, every time.' },
  { icon: GitBranch, title: 'Corporate Restructuring', desc: 'Mergers, acquisitions, share restructuring and corporate governance advisory.' },
];

const SERVICES = [
  { title: 'Private Limited Company', desc: 'Most popular structure for startups — limited liability with full credibility.',           img: '/service-1.jpg', path: '/business-setup'      },
  { title: 'USA Company Setup',        desc: 'Delaware C-Corp or LLC for global expansion and investor-ready structure.',              img: '/service-2.jpg', path: '/global-incorporation' },
  { title: 'GST Registration',         desc: 'Hassle-free GST enrollment with expert guidance on returns and compliance.',            img: '/service-3.jpg', path: '/compliances'          },
  { title: 'Import Export Code',       desc: 'IEC registration to start importing or exporting goods from India.',                    img: '/service-4.jpg', path: '/business-setup'      },
  { title: 'LLP Registration',         desc: 'Flexible partnership with limited liability — ideal for professional services.',         img: '/service-5.jpg', path: '/business-setup'      },
  { title: 'Annual Compliance',        desc: 'Complete annual filings, board meetings, ROC forms and audit support.',                 img: '/service-1.jpg', path: '/compliances'          },
];

const WHY_CARDS = [
  { icon: BadgeCheck,  title: 'Global Expertise',      points: ['CA/CS-led advisory for every engagement','10+ global jurisdictions covered','Institutional-grade compliance outcomes'] },
  { icon: Shield,      title: 'Regulatory Compliance', points: ['99.8% accuracy on all filings','Proactive deadline management','Up-to-date on changing regulations']                    },
  { icon: Headphones,  title: 'End-to-End Support',    points: ['Dedicated relationship manager','Real-time status tracking','30-min response SLA guaranteed']                           },
];

const STATS = [
  { number: '2737+', label: 'Clients Served'  },
  { number: '11+',   label: 'Years Experience' },
  { number: '54%',   label: 'Business Growth'  },
  { number: '7+',    label: 'Countries'         },
];

const DESTINATIONS = [
  { flag: '🇬🇧', name: 'United Kingdom',       desc: 'UK Ltd company with registered address and full compliance support.',    path: '/global-incorporation', img: '/destinations/london.png',    data: { time: '5-10 Days', tax: '25% Corp Tax', benefit: 'Zero Local Partner' } },
  { flag: '🇺🇸', name: 'United States',        desc: 'Delaware C-Corp or Wyoming LLC for global startups and investors.',     path: '/global-incorporation', img: '/destinations/nyc.png',       data: { time: '2-3 Weeks', tax: '21% Fed Tax', benefit: 'VC Friendly Structure' } },
  { flag: '🇸🇬', name: 'Singapore',            desc: 'Asia-Pacific hub — Pte Ltd with fast-track government approval.',       path: '/global-incorporation', img: '/destinations/singapore.png', data: { time: '1-3 Days',  tax: '17% Flat Tax', benefit: 'Tier-1 Banking Access' } },
  { flag: '🇦🇪', name: 'United Arab Emirates', desc: 'Mainland and Free Zone company formation across Dubai and UAE.',        path: '/global-incorporation', img: '/destinations/dubai.png',     data: { time: '7-12 Days', tax: '9% Corp Tax',  benefit: '100% Repatriation' } },
  { flag: '🇮🇳', name: 'India',                desc: 'Pvt Ltd, LLP, OPC — India\'s most trusted incorporation partner.',     path: '/business-setup',       img: '/destinations/india.png',    data: { time: '15-20 Days', tax: '25% Base Tax', benefit: 'Huge Consumer Market' } },
  { flag: '🇪🇪', name: 'Estonia',              desc: 'E-Residency and OÜ formation for digital-first European businesses.',   path: '/global-incorporation', img: '/destinations/estonia.png',  data: { time: '1 Day',     tax: '0% Reinvested', benefit: 'Digital E-Residency' } },
  { flag: '🇭🇰', name: 'Hong Kong',            desc: 'Strategic gateway to Asian markets with favorable tax environment.',    path: '/global-incorporation', img: '/destinations/hongkong.png', data: { time: '3-5 Days',  tax: '16.5% Tax',    benefit: 'Gateway to China' } },
  { flag: '🇨🇦', name: 'Canada',               desc: 'Federal and provincial incorporation for North American expansion.',   path: '/global-incorporation', img: '/destinations/canada.png',   data: { time: '2-5 Days',  tax: '26.5% Avg',    benefit: 'Stable Legal System' } },
];

const PROCESS = [
  { step: '01', icon: Lightbulb,   title: 'Choose Structure',  desc: 'We understand your goals, jurisdiction needs and ideal business structure through a dedicated advisory session.' },
  { step: '02', icon: FileCheck2,  title: 'Register Company',  desc: 'Our experts collect, verify and prepare all statutory documents with zero compliance gaps.' },
  { step: '03', icon: Settings2,   title: 'Compliance Setup',  desc: 'High-speed registration with government authorities — we handle every form and filing.' },
  { step: '04', icon: Rocket,      title: 'Launch Business',   desc: 'Continuous tax, legal and financial management keeps your business clean and audit-ready.' },
];

// ─────────────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030508]">
      {/* Background Video with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          y: useTransform(useScroll().scrollY, [0, 1000], [0, 400]),
          scale: useTransform(useScroll().scrollY, [0, 1000], [1, 1.15])
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover will-change-transform opacity-75"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark gradient for text contrast (less blue tint) */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(105deg, rgba(8,12,20,0.92) 0%, rgba(8,12,20,0.5) 45%, rgba(8,12,20,0.05) 100%)',
          }} 
        />
      </motion.div>

      {/* Bottom subtle breathing fade */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-white to-transparent" 
        animate={{ opacity: [0.03, 0.15, 0.03] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Copy */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#3b82f6' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-300">
                Biz Setup Global
              </span>
            </motion.div>

            <motion.h1 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.3 } }
              }}
              initial="hidden"
              animate="visible"
              className="font-bold leading-[1.05] tracking-tight mb-5 text-white" 
              style={{ fontSize: 'clamp(2.4rem,4.5vw,3.75rem)' }}
            >
              {"Your reliable partner".split(' ').map((word, i) => (
                <motion.span key={i} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }} className="inline-block">{word}&nbsp;</motion.span>
              ))}
              <br />
              {"in the".split(' ').map((word, i) => (
                <motion.span key={i} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }} className="inline-block">{word}&nbsp;</motion.span>
              ))}
              {" "}
              <motion.span variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }} className="font-serif italic text-blue-400">Business Setup</motion.span>
              {" "}
              <motion.span variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }} className="inline-block">age.</motion.span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-[17px] leading-relaxed mb-9 max-w-lg text-white/70 font-light">
              Professional services for global businesses. We deliver precision-driven corporate compliance and incorporation across 10+ jurisdictions.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[13px] text-white transition-all hover:scale-105 active:scale-95 bg-accent shadow-lg shadow-blue-900/20"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[13px] transition-all hover:bg-white/10 text-white border border-white/20 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Trust badge row */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mt-12">
              <div className="flex -space-x-2">
                {['#3b82f6','#0ea5e9','#6366f1','#10b981'].map((c,i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-[2px] border-[#0a0f18] flex items-center justify-center text-white text-[9px] font-bold" style={{ background: c }}>
                    {['CA','CS','LG','TX'][i]}
                  </div>
                ))}
              </div>
              <div className="border-l border-white/20 pl-4">
                <div className="text-[13px] font-bold text-white tracking-wide">2737+ businesses served</div>
                <div className="text-[11px] text-white/50 uppercase tracking-widest mt-0.5">across 7 countries</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Glass stats card with floating animation */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="hidden lg:block w-[90%] ml-auto"
            style={{ 
              y: useSpring(useTransform(useScroll().scrollY, [0, 800], [0, -120]), { stiffness: 60, damping: 20 }),
            }}
          >
            <div className="rounded-[2rem] p-8 relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl group">
              <div className="absolute -top-24 -right-24 w-56 h-56 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-all duration-300" />
              <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-emerald-500/5 blur-[80px] rounded-full group-hover:bg-emerald-500/10 transition-all duration-300" />
              
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Global Standards 2024
                </div>
                <div className="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-[8px] font-bold text-blue-300 tracking-wider">
                  ACTIVE NODES: 24
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-5 relative z-10">
                {STATS.map((s) => (
                  <div key={s.label} className="rounded-2xl p-5 bg-white/[0.03] border border-white/10 hover:bg-white/[0.1] hover:border-white/30 transition-all group/card">
                    <div className="text-3xl font-light mb-1 text-white tracking-tight group-hover/card:scale-105 transition-transform">{s.number}</div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-white/40 group-hover/card:text-blue-300 transition-colors">{s.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="rounded-[1rem] p-4 flex items-center gap-4 bg-white/[0.04] border border-white/10 relative z-10 group-hover:bg-white/[0.06] transition-all">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-accent shadow-sm shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-5 h-5 text-white transition-transform group-hover:rotate-[360deg] duration-300" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-white tracking-wide">Institutional Verified</div>
                  <div className="text-[9px] font-medium text-white/40 uppercase tracking-widest mt-0.5">Global Compliance Score: 100</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function LogoStripSection() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="py-20 overflow-hidden relative" style={{ background: BG, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[10px] font-bold uppercase tracking-[0.25em]" 
          style={{ color: MUTED }}
        >
          Trusted by leading companies across India &amp; globally
        </motion.p>
      </div>
      
      <div className="relative w-full logo-marquee-container group">
        <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
          {doubled.map((logo, i) => (
            <div key={i} className="flex-shrink-0 px-12 flex items-center justify-center">
              <img
                src={`/Clients/${logo}`}
                alt=""
                className="h-7 w-auto object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function FocusSection() {
  return (
    <section className="py-32 text-center relative overflow-hidden" style={{ background: '#0B1F3A' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/20 blur-[130px] rounded-full pointer-events-none" />
      <motion.div
        className="max-w-4xl mx-auto px-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
      >
        <motion.p variants={fadeUp} className="text-sm font-medium mb-6 uppercase tracking-[0.2em] text-blue-300">
          We focus on
        </motion.p>
        <motion.h2
          variants={{
            hidden:  { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } }
          }}
          className="font-serif italic font-bold leading-tight text-white mb-10"
          style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}
        >
          precision in corporate compliance.
        </motion.h2>
        <motion.div
          variants={{
            hidden:  { width: 0, opacity: 0 },
            visible: { width: 64, opacity: 1, transition: { duration: 0.6, delay: 0.4 } }
          }}
          className="h-1 mx-auto rounded-full"
          style={{ background: `linear-gradient(90deg, ${ACCENT}, rgba(11,31,58,0.2))` }}
        />
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function ExpertiseSection() {
  return (
    <section className="py-24" style={{ background: BG }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-end">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
            <motion.div variants={fadeUp} className="section-label">Corporate Expertise</motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: TEXT }}>
              Professional services<br />built for scale.
            </motion.h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base leading-relaxed"
            style={{ color: MUTED }}
          >
            We take a precision approach to deliver corporate compliance and incorporation — efficiently, proficiently, and at every scale.
          </motion.p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {EXPERTISE.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group relative"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-[0_8px_24px_rgba(11,31,58,0.06)] border border-blue-100 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 ease-[0.16,1,0.3,1] z-10 relative">
                <item.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors duration-300" style={{ color: TEXT }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section className="py-24" style={{ background: BG_ALT }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={stagger}>
            <motion.div variants={fadeUp} className="section-label">What We Offer</motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold" style={{ color: TEXT }}>Corporate Services</motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-base" style={{ color: MUTED }}>Helping businesses establish, verify, and grow globally.</motion.p>
          </motion.div>
          <Link to="/business-setup" className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap" style={{ color: ACCENT }}>
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {SERVICES.map((svc, i) => (
            <motion.div 
              key={svc.title} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.05 } }
              }}
            >
              <Link to={svc.path} className="block rounded-[2rem] overflow-hidden group relative h-[420px] glass-card border-none">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110 grayscale-[0.1] group-hover:grayscale-0 shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/95 via-[#0B1F3A]/40 to-transparent group-hover:via-[#0B1F3A]/20 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform group-hover:translate-y-[-8px] transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{svc.title}</h3>
                  <p className="text-sm leading-relaxed mb-6 text-white/70 group-hover:text-white transition-colors line-clamp-2">{svc.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent group-hover:text-blue-400">
                    Explore Strategy <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function WhySection() {
  return (
    <section className="py-24" style={{ background: BG }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-px" style={{ background: ACCENT }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>Our Edge</span>
            <div className="w-6 h-px" style={{ background: ACCENT }} />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold" style={{ color: TEXT }}>
            Why Businesses Choose BizSetup Global
          </motion.h2>
        </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-10 md:gap-14 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {WHY_CARDS.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="group"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-[0_12px_32px_rgba(37,99,235,0.12)] border border-blue-100 group-hover:-translate-y-2 group-hover:shadow-[0_16px_40px_rgba(37,99,235,0.18)] transition-all duration-300 ease-[0.16,1,0.3,1]" style={{ background: '#ffffff' }}>
                  <card.icon className="w-6 h-6" style={{ color: ACCENT }} />
                </div>
                <h3 className="text-xl font-bold mb-5" style={{ color: TEXT }}>{card.title}</h3>
                <ul className="space-y-4">
                  {card.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-px text-accent/60 group-hover:text-accent transition-colors" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${BORDER}`, boxShadow: SHADOW }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="py-10 text-center"
              style={{ background: i % 2 === 0 ? BG : BG_ALT, borderLeft: i > 0 ? `1px solid ${BORDER}` : 'none' }}
            >
              <div className="text-4xl font-bold mb-1.5" style={{ color: TEXT }}>{s.number}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: MUTED }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function DestinationsSection() {
  return (
    <section className="py-24" style={{ background: BG }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          className="mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="section-label">Global Reach</motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-3" style={{ color: TEXT }}>
            Global Business{' '}
            <span className="font-serif italic" style={{ color: ACCENT }}>Setup Destinations</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base max-w-xl" style={{ color: MUTED }}>
            Our network spans the most business-friendly jurisdictions for seamless international expansion.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {DESTINATIONS.map((dest) => (
            <motion.div key={dest.name} variants={fadeUp}>
              <Link to={dest.path} className="block rounded-[2.5rem] overflow-hidden group relative" style={{ height: 320 }}>
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/40 to-transparent group-hover:via-[#07111F]/60 transition-all duration-300" />
                
                {/* Initial Content View */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end group-hover:translate-y-[-100%] transition-transform duration-300 ease-[0.22, 1, 0.36, 1]">
                  <div className="text-2xl mb-4 transform group-hover:scale-125 transition-transform">{dest.flag}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{dest.name}</h3>
                  <p className="text-xs leading-relaxed text-white/50">{dest.desc}</p>
                </div>

                {/* Hover Strategy Data Reveal */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center bg-blue-600/90 backdrop-blur-sm translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-[0.22, 1, 0.36, 1]">
                   <div className="text-white/60 text-[10px] font-bold uppercase tracking-[0.25em] mb-4">Market Intel</div>
                   <h4 className="text-xl font-bold text-white mb-6 underline decoration-blue-400 underline-offset-8">Target: {dest.name}</h4>
                   
                   <div className="space-y-4">
                      {[
                        { label: 'Avg Setup', val: dest.data.time },
                        { label: 'Corporate Tax', val: dest.data.tax },
                        { label: 'Strategic Edge', val: dest.data.benefit }
                      ].map(d => (
                         <div key={d.label}>
                            <div className="text-[9px] font-bold uppercase tracking-widest text-white/50">{d.label}</div>
                            <div className="text-sm font-bold text-white">{d.val}</div>
                         </div>
                      ))}
                   </div>

                   <div className="mt-8 flex items-center gap-2 text-xs font-bold text-white">
                      Start Incorporation <ArrowRight className="w-4 h-4" />
                   </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/global-incorporation" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: ACCENT }}>
            View All Jurisdictions <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function ProcessSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-white premium-bg-pattern">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -left-24 w-80 h-80 bg-slate-100/30 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="section-label mx-auto mb-4">Success Framework</motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: TEXT }}>
              Our Structured <span className="text-accent underline decoration-blue-100 decoration-8 underline-offset-4 font-serif italic">Methodology</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: MUTED }}>
              Precision-engineered stages ensuring compliance velocity and operational clarity.
            </motion.p>
          </motion.div>
        </div>

        <div className="relative mt-8">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-blue-600/30 to-transparent z-0" />

          <div className="grid md:grid-cols-4 gap-12 md:gap-8">
            {PROCESS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.15 }}
                className="relative z-10 text-center flex flex-col items-center group cursor-default"
              >
                <div className="w-20 h-20 rounded-full flex flex-col items-center justify-center bg-white border border-blue-100 shadow-[0_8px_30px_rgba(37,99,235,0.08)] mb-8 relative group-hover:scale-110 group-hover:shadow-[0_12px_40px_rgba(37,99,235,0.15)] transition-all duration-300 z-10">
                  <step.icon className="w-8 h-8 text-blue-600 relative z-10 transition-transform group-hover:scale-110" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white text-[11px] font-bold shadow-md transform group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-blue-600 transition-colors" style={{ color: TEXT }}>{step.title}</h3>
                <p className="text-[15px] leading-relaxed opacity-75 max-w-[240px]" style={{ color: TEXT }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function FooterContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Global Incorporation', message: '' });

  return (
    <section className="relative pt-24 pb-32 overflow-hidden" style={{ background: '#0B1F3A' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-8 bg-white/5">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Contact Our Global Desk
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to take your<br />
              <span className="text-accent underline underline-offset-4 decoration-2 font-serif italic">business global?</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-12 max-w-md">
              Our team of specialized auditors, CAs, and compliance experts are available across time zones to support your expansion.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Mail, label: 'Support Email', val: 'contact@bizsetupglobal.com' },
                { icon: Phone, label: 'Global Phone', val: '+91 99999 00000' }
              ].map(info => (
                <div key={info.label} className="group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-1">{info.label}</div>
                  <div className="text-base md:text-lg font-semibold text-white tracking-wide">{info.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-transparent mt-4 lg:mt-0 xl:pl-10">
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white/70 uppercase tracking-[0.1em]">Full Name</label>
                  <input
                    type="text"
                    className="w-full h-12 bg-transparent border-b border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-all text-base px-1 rounded-none"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-white/70 uppercase tracking-[0.1em]">Work Email</label>
                  <input
                    type="email"
                    className="w-full h-12 bg-transparent border-b border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-all text-base px-1 rounded-none"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-xs font-bold text-white/70 uppercase tracking-[0.1em]">Specialization Interest</label>
                <select
                  className="w-full h-12 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer text-base px-1 rounded-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%208l5%205%205-5%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0_center]"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                >
                  <option className="bg-[#0B1F3A] text-white" value="Global Incorporation">Global Incorporation</option>
                  <option className="bg-[#0B1F3A] text-white" value="Tax Compliance">Tax Compliance</option>
                  <option className="bg-[#0B1F3A] text-white" value="Business Registration">Business Registration</option>
                </select>
              </div>
              
              <div className="space-y-3">
                <label className="text-xs font-bold text-white/70 uppercase tracking-[0.1em]">Detailed Message</label>
                <textarea
                  rows={3}
                  className="w-full bg-transparent border-b border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-all text-base px-1 rounded-none outline-none resize-none pt-2"
                  placeholder="Tell us about your expansion goals..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                />
              </div>
              
              <div className="pt-6">
                <button type="button" className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full font-bold shadow-lg shadow-blue-900/30 hover:shadow-xl hover:shadow-blue-900/40 hover:-translate-y-1 transition-all text-sm tracking-[0.15em] uppercase">
                  Launch Global Strategy
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
export function Home() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    const handleMouse = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        }
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative selection:bg-blue-100 selection:text-accent">
      <div ref={glowRef} className="mouse-glow hidden lg:block" />
      <HeroSection />
      <FocusSection />
      <ExpertiseSection />
      <ServicesSection />
      <WhySection />
      <DestinationsSection />
      <ProcessSection />
      <LogoStripSection />
      <FooterContactSection />
    </div>
  );
}
