import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { ShieldCheck, Zap, Globe, ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceLayoutProps {
  title: string;
  subtitle?: string;
  heroImage?: string;
  children: React.ReactNode;
  sidebarContent?: React.ReactNode;
}

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function ServiceLayout({
  title,
  subtitle,
  heroImage = '/service-1.jpg',
  children,
  sidebarContent
}: ServiceLayoutProps) {
  return (
    <div className="bg-white min-h-screen selection:bg-blue-50 selection:text-blue-600">

      {/* ── HIGH-END ADVISORY HERO ─────────────────────────── */}
      <section className="relative pt-44 pb-32 overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 0.4 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            src={heroImage}
            alt=""
            className="w-full h-full object-cover grayscale"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-[#0B1F3A]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.15),transparent)]" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-3 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-12"
          >
            <Link to="/" className="hover:text-blue-400 transition-colors uppercase">HQ</Link>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <Link to="/services" className="hover:text-blue-400 transition-colors uppercase">Advisory</Link>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-blue-400 uppercase tracking-[0.3em]">{title}</span>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
             <div className="lg:col-span-8">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.4, delay: 0.2 }}
                 className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-blue-400/20 bg-blue-500/10 backdrop-blur-md"
               >
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-300">
                   Service Blueprint
                 </span>
               </motion.div>

               <motion.h1
                 variants={titleVariants}
                 initial="hidden"
                 animate="visible"
                 className="font-bold text-white leading-[1.1] mb-8 tracking-tight"
                 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
               >
                 {title.split(' ').map((word, i) => (
                    <motion.span 
                      key={i} 
                      variants={wordVariants}
                      className={`inline-block ${i === title.split(' ').length - 1 ? 'font-serif italic text-blue-400 font-normal' : ''}`}
                    >
                       {word}&nbsp;
                    </motion.span>
                 ))}
               </motion.h1>

               {subtitle && (
                 <motion.p 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                   className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl"
                 >
                   {subtitle}
                 </motion.p>
               )}
             </div>

             <motion.div 
               initial="hidden"
               animate="visible"
               variants={{
                 visible: { transition: { staggerChildren: 0.05, delayChildren: 0.8 } }
               }}
               className="lg:col-span-4 lg:mt-6 grid grid-cols-1 gap-6"
             >
                {[
                  { val: '100%', label: 'Compliance Accuracy' },
                  { val: '500+', label: 'Global Clients' },
                ].map((s, i) => (
                   <motion.div 
                     key={i}
                     variants={itemVariants}
                     className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-colors"
                   >
                      <div className="text-4xl font-serif font-bold text-white italic mb-1 transition-transform group-hover:scale-105">{s.val}</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-blue-300 transition-colors">{s.label}</div>
                   </motion.div>
                ))}
             </motion.div>
          </div>
        </Container>
      </section>

      {/* ── PRIMARY CONTENT GRID ─────────────────────────── */}
      <section className="py-32 bg-white relative">
        <Container>
          <div className="flex flex-col lg:flex-row gap-20 xl:gap-28">

            {/* Left Content Area */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-[65%]"
            >
              <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:italic">
                 {children}
              </div>
            </motion.div>

            {/* Right Strategic Sidebar */}
            <aside className="lg:w-[35%] space-y-10">
              
              <div className="sticky top-32 space-y-8">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.98 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.4 }}
                   className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-premium group"
                 >
                   <div className="flex items-center gap-3 mb-10">
                      <div className="w-8 h-px bg-blue-600" />
                      <h4 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em]">Institutional Trust</h4>
                   </div>
                   
                   <div className="space-y-10">
                     {[
                       { icon: ShieldCheck, title: 'Advisory First', desc: 'Prioritizing legal adherence over shortcut filings.' },
                       { icon: Zap, title: 'Precision Speed', desc: 'Minimal turn-around through vertical expertise.' },
                       { icon: Globe, title: 'Network Scale', desc: 'Active presence in 12+ international hubs.' }
                     ].map((item, i) => (
                       <motion.div 
                         key={i} 
                         initial={{ opacity: 0, x: 20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: i * 0.05 }}
                         className="flex gap-6 items-start"
                       >
                         <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-soft border border-slate-100 group-hover:scale-110 transition-transform">
                           <item.icon className="w-6 h-6" />
                         </div>
                         <div>
                           <h5 className="font-bold text-base text-[#0B1F3A] mb-1 tracking-tight">{item.title}</h5>
                           <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                         </div>
                       </motion.div>
                     ))}
                   </div>
                 </motion.div>

                 {sidebarContent}

                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="p-10 rounded-[2.5rem] bg-[#0B1F3A] text-white shadow-2xl relative overflow-hidden group"
                 >
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/30 rounded-full blur-[60px]" />
                    
                    <h4 className="text-2xl font-serif font-bold italic mb-4 relative z-10">Need Board Level Advisory?</h4>
                    <p className="text-white/60 mb-8 leading-relaxed font-light relative z-10 text-sm">
                      Speak directly with our senior partners for complex restructuring or global setup requirements.
                    </p>
                    
                    <div className="space-y-3">
                       <Link
                         to="/contact"
                         className="flex items-center gap-3 justify-center w-full py-4 px-6 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 active:scale-95 translate-y-0 hover:-translate-y-1"
                       >
                         <PhoneCall className="w-4 h-4" />
                         Speak to a Partner
                       </Link>
                       <div className="text-center">
                          <span className="text-[10px] text-white/30 font-bold uppercase tracking-[0.1em]">Instant Callback Available</span>
                       </div>
                    </div>
                 </motion.div>
              </div>

            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
