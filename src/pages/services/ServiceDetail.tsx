import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ServiceLayout } from '@/components/layout';
import { SERVICE_PAGES } from '@/data/servicePages';
import { CheckCircle2, FileText, Info, HelpCircle, ArrowRight, Scale, ShieldCheck, Clock } from 'lucide-react';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? SERVICE_PAGES[slug] : null;

  if (!slug || !service) {
    return <Navigate to="/business-setup" replace />;
  }

  return (
    <ServiceLayout 
      title={service.title}
      subtitle={service.heroDesc}
    >
      <div className="space-y-24">
        {/* SPECIALIZED COMPLIANCE INTEL (Only for Compliance Pages) */}
        {service.badge === 'Compliances' && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[3rem] p-12 bg-slate-900 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10">
               <ShieldCheck className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-8">
                 <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-600/30">
                    <Clock className="w-7 h-7 text-white" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-serif font-bold italic tracking-tight">Statutory Deadline Mapping</h3>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">Institutional Safety Standards</div>
                 </div>
              </div>
              <p className="text-white/50 text-base mb-12 max-w-2xl font-light leading-relaxed italic">
                 Missing a single jurisdictional filing can lead to hefty penalties and structural dissolution. Our proactive compliance desk ensures a <span className="text-white font-bold">100% filing success rate</span> across all active entities.
              </p>
              <div className="grid sm:grid-cols-3 gap-8">
                 {[
                   { label: 'Filing Accuracy', val: '100%', detail: 'Zero-Gap Reviews' },
                   { label: 'Penalty Mitigation', val: 'ACTIVE', detail: 'Real-time Tracking' },
                   { label: 'Audit Readiness', val: 'L1 SECURED', detail: 'Tier-1 Standards' }
                 ].map(stat => (
                   <div key={stat.label} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors">
                      <div className="text-3xl font-bold text-blue-400 mb-2">{stat.val}</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">{stat.label}</div>
                      <div className="text-xs text-white/30 italic">{stat.detail}</div>
                   </div>
                 ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Render Dynamic Content Sections */}
        {service.sections.map((section, idx) => (
          <motion.section 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
          >
            {/* Sophisticated Section Header */}
            <div className="flex flex-col gap-2 mb-10 group">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-px bg-blue-600 group-hover:w-12 transition-all duration-500" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">{section.type === 'list' ? 'Key Features' : 'Strategic Overview'}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A] italic">
                {section.heading}
              </h2>
            </div>

            {/* TEXT SECTION: Journalistic Style */}
            {section.type === 'text' && section.content && (
              <p className="text-xl text-slate-600 leading-relaxed whitespace-pre-line font-light">
                {section.content}
              </p>
            )}

            {/* LIST SECTION: 2-Column Professional Feature Grid */}
            {section.type === 'list' && section.items && (
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {section.items.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border border-blue-100 flex items-center justify-center bg-blue-50 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="space-y-1">
                       <span className="text-lg text-[#0B1F3A] font-bold tracking-tight">{item}</span>
                       <div className="w-4 h-px bg-slate-100 group-hover:w-full transition-all duration-700" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* STEPS SECTION: Horizontal Execution Roadmap */}
            {section.type === 'steps' && section.steps && (
              <div className="relative mt-8">
                {/* Connector Line */}
                <div className="absolute top-[2.25rem] left-[2.25rem] right-[2.25rem] h-px bg-slate-200 hidden md:block" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
                  {section.steps.map((step, i) => (
                    <div key={i} className="flex flex-col group">
                      <div className="w-12 h-12 rounded-full bg-white border border-slate-200 text-[#0B1F3A] flex items-center justify-center font-bold text-sm mb-6 shadow-soft group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        {i + 1}
                      </div>
                      <h3 className="text-lg font-bold text-[#0B1F3A] mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TABLE SECTION: Corporate Data View */}
            {section.type === 'table' && section.tableContent && (
              <div className="overflow-x-auto rounded-[2rem] border border-slate-100 shadow-xl">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      {section.tableContent.headers.map((header, i) => (
                        <th key={i} className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0B1F3A]">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {section.tableContent.rows.map((row, i) => (
                      <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                        {row.map((cell, j) => (
                          <td key={j} className="px-8 py-6 text-sm text-slate-600 font-light">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.section>
        ))}

        {/* DOCUMENTS SECTION: The Official Checklist */}
        {service.documents && service.documents.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-14 bg-[#0B1F3A] rounded-[3rem] text-white shadow-3xl relative overflow-hidden"
          >
            {/* Visual background accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -mr-48 -mt-48" />
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-12 relative z-10">
               <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-3xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/30">
                   <FileText className="w-8 h-8 text-white" />
                 </div>
                 <h2 className="text-3xl md:text-4xl font-serif font-bold italic">Official Checklist</h2>
               </div>
               <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                  <Scale className="w-4 h-4" />
                  Regulatory Compliance Standard
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
              {service.documents.map((doc, i) => (
                <div key={i} className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 group hover:border-blue-400/30 transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                  <span className="text-base font-bold text-white/90 tracking-wide">{doc}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-14 p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 flex items-start gap-6 relative z-10 transition-all hover:bg-white/[0.05]">
              <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div className="space-y-2">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-white/60">Important Note</h4>
                 <p className="text-sm text-white/50 leading-relaxed font-light italic">
                   Document requirements may vary slightly based on the specific jurisdiction, nature of business, and state-level regulations. Our board of experts will provide a customized filing roadmap during your consultation.
                 </p>
              </div>
            </div>
          </motion.section>
        )}

        {/* CONSULTATION BANNER: Executive Access */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-10 md:p-14 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10 relative group overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-[40px] -mr-16 -mt-16" />
           
           <div className="flex items-center gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl border border-slate-100">
                 <HelpCircle className="w-8 h-8 text-blue-600" />
              </div>
              <div className="max-w-md">
                 <h2 className="text-2xl font-serif font-bold text-[#0B1F3A] mb-2 italic">Strategy required?</h2>
                 <p className="text-base text-slate-500 font-light leading-relaxed">
                   Localized legal clarity is key for cross-border setup. Secure a partner strategy session today.
                 </p>
              </div>
           </div>
           
           <button className="flex-shrink-0 flex items-center gap-3 px-8 py-4 bg-[#0B1F3A] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-blue-600 transition-all hover:shadow-xl group/btn transform hover:-translate-y-1">
             Consult Partner
             <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
           </button>
        </motion.section>
      </div>
    </ServiceLayout>
  );
}
