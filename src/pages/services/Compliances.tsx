import { ServiceLayout } from '@/components/layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Clock, FileText, 
  ArrowRight, Landmark, Scale, AlertCircle, Briefcase 
} from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};
const stagger = { visible: { transition: { staggerChildren: 0.05 } } };

export function Compliances() {
  const ECOSYSTEM = [
    { 
      slug: 'private-ltd-compliance',
      name: 'Private Ltd Annual Filing', 
      desc: 'Form MGT-7, AOC-4, and Auditor appointments handled with absolute ROC precision.',
      accent: 'bg-blue-600/5',
      icon: ShieldCheck
    },
    { 
      slug: 'llp-compliance',
      name: 'LLP Statutory Filing', 
      desc: 'Precise management of Form 8 and Form 11 within seasonal regulatory windows.',
      accent: 'bg-indigo-600/5',
      icon: Scale
    },
    { 
      slug: 'share-management',
      name: 'Capital & Share Structuring', 
      desc: 'Director appointments, equity transfers, and share capital increases with legal clarity.',
      accent: 'bg-slate-900/5',
      icon: Landmark
    }
  ];

  return (
    <ServiceLayout 
      title="Corporate Compliances"
      subtitle="The specialized framework for maintaining a legally sound, audit-ready entity across all active operational jurisdictions."
      heroImage="/service-3.jpg"
    >
      <div className="space-y-32">
        
        {/* Institutional Ecosystem Section */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl">
                <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
                   <div className="w-10 h-px bg-blue-600" />
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">The Ecosystem</span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#0B1F3A] tracking-tighter">
                  Proactive regulatory <span className="font-serif italic font-normal text-blue-600">safety protocols.</span>
                </motion.h2>
             </motion.div>
             <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-slate-500 font-light max-w-sm italic md:text-right">A single missed filing is a structural risk. We automate your regulatory safety net.</motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ECOSYSTEM.map((item, idx) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link 
                  to={item.slug === 'share-management' ? '/service/share-transfer' : `/service/${item.slug}`}
                  className={`group relative p-12 rounded-[3.5rem] ${item.accent} border border-slate-100 hover:border-blue-200 transition-all hover:bg-white hover:shadow-3xl hover:shadow-blue-900/5 hover:-translate-y-2 flex flex-col h-full overflow-hidden`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 mb-8 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                     <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{item.name}</h3>
                  <p className="text-base text-slate-500 font-light mb-10 leading-relaxed">{item.desc}</p>
                  
                  <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 group-hover:translate-x-2 transition-transform">
                    Compliance Specs <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Compliance Monitoring */}
        <section className="bg-[#0B1F3A] rounded-[3.5rem] p-14 text-white relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform">
              <Clock className="w-48 h-48" />
           </div>
           
           <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                 <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Deadline Intelligence Hub
                 </div>
                 <h3 className="text-3xl md:text-5xl font-serif font-bold italic mb-8 leading-tight">Zero-Penalty<br />Filing Architecture.</h3>
                 <p className="text-lg text-white/50 leading-relaxed mb-12 font-light max-w-xl">
                    BizSetupGlobal operates a localized monitoring desk that tracks statutory windows across GST, Income Tax, and ROC portals simultaneously—eliminating the risk of late fees.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <Link to="/service/gst-return-filing" className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all">GST Returns</Link>
                    <Link to="/service/income-tax-filing" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">ITR Filing</Link>
                 </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                 {[
                   { label: 'Filing Accuracy', val: '100%' },
                   { label: 'Penalty Saved', val: '₹12L+' },
                   { label: 'Active Tasks', val: '500+' },
                   { label: 'Review Layers', val: '3-Tier' }
                 ].map(s => (
                   <div key={s.label} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md">
                      <div className="text-3xl font-bold text-blue-400 mb-1">{s.val}</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{s.label}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* The Statutory Checklist */}
        <section>
           <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-px bg-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">Administrative Depth</span>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Registered Office Change', icon: Landmark, path: '/service/change-registered-office' },
                { title: 'Company Name Change', icon: FileText, path: '/service/name-change' },
                { title: 'Capital Increase', icon: Briefcase, path: '/service/increase-share-capital' },
                { title: 'Winding Up', icon: Scale, path: '/service/winding-up' }
              ].map((item, i) => (
                <Link 
                  key={i}
                  to={item.path}
                  className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-600 hover:shadow-premium group transition-all"
                >
                   <item.icon className="w-6 h-6 text-slate-300 group-hover:text-blue-600 mb-6 transition-colors" />
                   <h4 className="text-sm font-bold text-[#0B1F3A] tracking-tight">{item.title}</h4>
                </Link>
              ))}
           </div>
        </section>

      </div>
    </ServiceLayout>
  );
}

