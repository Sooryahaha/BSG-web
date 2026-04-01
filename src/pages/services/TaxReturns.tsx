import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Receipt, Calculator, FileText, CheckCircle2,
  Clock, Shield, Users, TrendingUp, ShieldCheck, Zap, Globe
} from 'lucide-react';
import { Container } from '@/components/layout/Container';

const TEXT   = '#0B1F3A';
const MUTED  = '#5B7A99';
const ACCENT = '#2563EB';
const BORDER = 'rgba(11,31,58,0.08)';
const SHADOW = '0 2px 16px rgba(11,31,58,0.06), 0 1px 4px rgba(11,31,58,0.04)';
const SHADOW_H = '0 32px 80px rgba(11,31,58,0.14), 0 8px 24px rgba(37,99,235,0.08)';

const ease = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const SERVICES = [
  { slug: 'gst-return-filing', icon: Receipt,    title: 'GST Registration & Filing',    desc: 'Complete GST enrollment, monthly/quarterly returns, and annual reconciliation with zero penalties.' },
  { slug: 'income-tax-filing', icon: Calculator, title: 'Income Tax Returns',           desc: 'ITR filing for individuals, firms, LLPs, and companies. Optimize tax liability with expert guidance.' },
  { slug: 'gst-return-filing', icon: FileText,   title: 'TDS Compliance',              desc: 'TDS deduction, deposit, and return filing for all categories — salary, professional fees, rent.' },
  { slug: 'income-tax-filing', icon: Shield,     title: 'Tax Audit & Assessment',      desc: 'Statutory tax audits under Section 44AB and representation before income tax authorities.' },
  { slug: 'income-tax-filing', icon: TrendingUp, title: 'Tax Planning & Advisory',     desc: 'Strategic tax planning for HNIs, startups, and corporates to minimize tax outflows legally.' },
  { slug: 'pf-registration', icon: Users,      title: 'Payroll & PT Compliance',     desc: 'End-to-end payroll processing, PF, ESIC, professional tax filings and Form 16 issuance.' },
];

const INCLUSIONS = [
  'Dedicated CA for your account',
  'Timely filing — zero late fees',
  'Secure document management portal',
  'Real-time status updates',
  'Expert query resolution',
  'Annual review consultation',
];

export function TaxReturns() {
  return (
    <div className="bg-white min-h-screen selection:bg-blue-50 selection:text-blue-600">

      {/* ── CINEMATIC INSTITUTIONAL HERO ── */}
      <section className="relative pt-44 pb-32 overflow-hidden bg-[#0B1F3A]">
        {/* Background Image with sophisticated mask */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/service-4.jpg" 
            alt="Tax & GST Advisory" 
            className="w-full h-full object-cover opacity-30 grayscale-[0.5]"
          />
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'radial-gradient(circle at 20% 50%, rgba(11,31,58,0.98) 0%, rgba(11,31,58,0.85) 50%, rgba(3,7,18,0.98) 100%)' 
            }} 
          />
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
             <motion.div
               initial="hidden"
               animate="visible"
               variants={stagger}
               className="lg:col-span-8"
             >
               <motion.div 
                 variants={fadeUp} 
                 className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8 bg-blue-500/10 border border-blue-400/20 backdrop-blur-md"
               >
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-300">Fiscal & Tax Hub</span>
               </motion.div>
   
               <motion.h1 
                 variants={fadeUp} 
                 className="font-bold leading-[1.02] tracking-tighter mb-8 text-white" 
                 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}
               >
                 Precision Tax &<br />
                 <span className="text-blue-500 font-serif italic">GST Consulting.</span>
               </motion.h1>
   
               <motion.p 
                 variants={fadeUp} 
                 className="text-xl leading-relaxed text-white/60 font-light mb-12 max-w-xl"
               >
                 Secure your entity's standing with high-accuracy filings, strategic tax planning, and seamless GST management led by our dedicated board of CAs.
               </motion.p>

               <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                  <Link to="/contact" className="px-10 py-5 rounded-full bg-blue-600 text-white font-bold text-xs uppercase tracking-widest shadow-2xl shadow-blue-900/40 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 group">
                     Initiate Tax Plan
                     <ArrowRight className="w-4 h-4 inline-block ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/compliances" className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest backdrop-blur-md hover:bg-white/10 transition-all">
                     View Compliances
                  </Link>
               </motion.div>
             </motion.div>

             {/* Right Stats Board */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="lg:col-span-4 grid grid-cols-1 gap-4"
             >
                {[
                  { val: '₹0', label: 'Late Penalties Paid', icon: ShieldCheck },
                  { val: '99.8%', label: 'Filing Accuracy', icon: Zap },
                  { val: '11+', label: 'Collective CA Exp', icon: Globe }
                ].map((s, i) => (
                   <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-4 mb-4">
                         <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                            <s.icon className="w-5 h-5" />
                         </div>
                         <div className="text-3xl font-serif font-bold text-white italic">{s.val}</div>
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{s.label}</div>
                   </div>
                ))}
             </motion.div>
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <section className="py-32 relative z-10" style={{ background: '#ffffff' }}>
        <Container>
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <div className="max-w-2xl">
               <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
                 <div className="w-10 h-px bg-blue-600" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">The Ecosystem</span>
               </motion.div>
               <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#0B1F3A] tracking-tighter">Tax & Compliance Hub</motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-slate-500 font-light max-w-sm leading-relaxed italic text-right">
               Expert-led management of every statutory touchpoint. We handle the complexity, you manage the growth.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {SERVICES.map(({ slug, icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
              >
                <Link
                  to={`/service/${slug}`}
                  className="group block rounded-[2.5rem] p-10 bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform">
                     <Icon className="w-24 h-24" />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm border border-slate-100 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-blue-600/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#0B1F3A] tracking-tight group-hover:text-blue-600 transition-colors">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500 font-light">{desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Inclusions + CTA */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-slate-100" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-100">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">The Advisory Promise</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-10 text-[#0B1F3A] tracking-tight">
                Everything you need,<br />
                <span className="font-serif italic font-normal text-blue-600">nothing you don't.</span>
              </motion.h2>
              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {INCLUSIONS.map(item => (
                  <motion.div key={item} variants={fadeUp} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                       <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <span className="text-sm font-bold text-slate-700 tracking-tight">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[3rem] p-12 bg-white relative shadow-2xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold italic mb-3 text-[#0B1F3A]">Board level advisory.</h3>
                <p className="text-lg text-slate-500 font-light mb-10 leading-relaxed">Speak with a specialist CA to understand the <span className="text-blue-600 font-bold">optimal tax architecture</span> for your current business scale.</p>
                
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-4 w-full py-6 rounded-full bg-[#0B1F3A] text-white font-bold text-xs uppercase tracking-widest transition-all hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-900/20 transform hover:-translate-y-1 active:scale-95 group"
                >
                  Schedule Strategic Session
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <div className="mt-8 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  Instant Callback Available for Global Clients
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
