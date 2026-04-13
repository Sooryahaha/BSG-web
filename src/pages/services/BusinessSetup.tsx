import { ServiceLayout } from '@/components/layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, Shield, ArrowRight, 
  Scale, Zap, Globe, FileCheck, CheckCircle2 
} from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export function BusinessSetup() {
  const STRUCTURES = [
    { 
      slug: 'private-limited',
      name: 'Private Limited Company', 
      desc: 'The corporate gold standard in India. Ideal for startups seeking VC funding and institutional credibility.',
      features: ['Limited Liability Protection', 'Separate Legal Entity Status', 'High Investor Trust'],
      accent: 'bg-blue-600/5'
    },
    { 
      slug: 'llp',
      name: 'Limited Liability Partnership', 
      desc: 'Combines partnership flexibility with company-level protection. Perfect for professional services.',
      features: ['Cost-Effective Compliance', 'No Audit for Small Firms', 'Flexible Governance'],
      accent: 'bg-indigo-600/5'
    },
    { 
      slug: 'one-person-company',
      name: 'One Person Company (OPC)', 
      desc: 'Enables solo founders to operate as a corporate entity with limited liability and branding edge.',
      features: ['Single-Member Control', 'Corporate Credibility', 'Easy Debt Financing'],
      accent: 'bg-blue-400/5'
    },
    { 
      slug: 'partnership-firm',
      name: 'Partnership Firm', 
      desc: 'Quickest group-ownership setup. Suitable for small retail and family-run operations.',
      features: ['Simple Registration', 'Low Setup Cost', 'Minimal Annual Reporting'],
      accent: 'bg-slate-900/5'
    }
  ];

  return (
    <ServiceLayout 
      title="Business Setup in India"
      subtitle="The definitive framework for incorporating and scaling your enterprise within the most dynamic market in the world."
      heroImage="/service-1.jpg"
    >
      <div className="space-y-32">
        
        {/* Institutional Intro Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <div className="max-w-2xl">
             <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">The Blueprint</span>
             </motion.div>
             <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#0B1F3A] tracking-tighter mb-8">
               Strategizing your <span className="font-serif italic font-normal text-blue-600">entry architecture.</span>
             </motion.h2>
             <motion.p variants={fadeUp} className="text-xl text-slate-500 font-light leading-relaxed">
               Choosing the correct legal structure is your first institutional move. We provide localized legal clarity to ensure your foundation is optimized for long-term growth and regulatory safety.
             </motion.p>
          </div>
        </motion.section>

        {/* Dynamic Structure Cards */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            {STRUCTURES.map((item, idx) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link 
                  to={`/service/${item.slug}`}
                  className={`block group relative p-12 rounded-[3.5rem] ${item.accent} border border-slate-100 hover:border-blue-200 transition-all hover:bg-white hover:shadow-3xl hover:shadow-blue-900/5 hover:-translate-y-2 overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:scale-110 transition-transform">
                     <Building2 className="w-40 h-40" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{item.name}</h3>
                  <p className="text-base text-slate-500 font-light mb-8 leading-relaxed max-w-sm">{item.desc}</p>
                  
                  <div className="grid gap-4 mb-10">
                    {item.features.map(f => (
                      <div key={f} className="flex items-center gap-4">
                        <div className="w-5 h-5 rounded-full bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                           <CheckCircle2 className="w-3 h-3 text-blue-600 group-hover:text-white" />
                        </div>
                        <span className="text-sm font-bold text-slate-700 tracking-tight">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 group-hover:translate-x-2 transition-transform">
                    Execution Details <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Hub Section */}
        <section className="p-14 bg-slate-900 rounded-[3.5rem] text-white relative overflow-hidden group">
           <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-600/30 rounded-full blur-[100px] opacity-50 group-hover:opacity-100 transition-opacity" />
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                   <Globe className="w-3.5 h-3.5" />
                   Foreign Subsidiary Hub
                 </div>
                 <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic leading-[1.1] text-white">Inbound Investment &<br />Cross-Border Setup.</h3>
                 <p className="text-lg text-white/50 leading-relaxed mb-10 font-light">
                    Expansion into the Indian market requires meticulous adherence to FEMA and FDI regulations. We manage everything from **Wholly Owned Subsidiaries (WOS)** to Branch and Liaison office establishments.
                 </p>
                 <div className="grid sm:grid-cols-2 gap-4">
                    {['Wholly Owned Subsidiary (WOS)', 'Branch Office Setup', 'Liaison Office Hub', 'Project Office Compliance'].map(item => (
                       <div key={item} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                          <CheckCircle2 className="w-4 h-4 text-blue-400" />
                          <span className="text-sm font-bold tracking-tight text-white/80">{item}</span>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-xl">
                 <h4 className="text-xl font-bold mb-6">Partner-Led Regulatory Support</h4>
                 <div className="space-y-8">
                    {[
                      { icon: Scale, title: 'FEMA Adherence', desc: 'Inward remittance and share allotment reporting.' },
                      { icon: Zap, title: 'High-Speed Incorporation', desc: 'Incorporation certificates within 15-20 days.' },
                      { icon: Shield, title: 'Board Governance', desc: 'Support for foreign directors and residency norms.' }
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-6 items-start">
                         <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/40">
                            <feat.icon className="w-6 h-6" />
                         </div>
                         <div>
                            <div className="font-bold text-base mb-1">{feat.title}</div>
                            <div className="text-sm text-white/40 font-light">{feat.desc}</div>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* License Grid */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
             <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-px bg-blue-600" />
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">The Perimeter</span>
                </div>
                <h2 className="text-4xl font-bold text-[#0B1F3A] tracking-tighter">Registrations & Licensing</h2>
             </div>
             <p className="text-slate-500 font-light max-w-sm italic md:text-right">Seamless coordination of all statutory licensing required for your specific industrial vertical.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
             {[
               { name: 'DSC Registration', slug: 'dsc' },
               { name: 'MSME Udhyam', slug: 'msme-registration' },
               { name: 'Import Export Code', slug: 'import-export-code' }, 
               { name: 'Professional Tax', slug: 'professional-tax' },
               { name: 'PF & ESI', slug: 'pf-registration' },
               { name: 'Shop & Est.', slug: 'shops-establishment' },
               { name: 'TAN Registration', slug: 'tan-registration' },
               { name: 'FSSAI License', slug: 'fssai' },
               { name: 'Trade License', slug: 'trade-license' },
               { name: 'ISO Certification', slug: 'iso' },
               { name: 'Trust Setup', slug: 'trust-registration' },
               { name: 'Society Setup', slug: 'society-registration' }
             ].map(reg => (
               <Link 
                 key={reg.slug} 
                 to={`/service/${reg.slug}`}
                 className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center hover:bg-white hover:border-blue-600 hover:shadow-premium group transition-all"
               >
                  <FileCheck className="w-6 h-6 text-slate-300 group-hover:text-blue-600 transition-colors mb-3" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#0B1F3A]">{reg.name}</span>
               </Link>
             ))}
          </div>
        </section>

      </div>
    </ServiceLayout>
  );
}

