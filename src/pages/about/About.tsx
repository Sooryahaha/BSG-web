import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Target, Globe, Award, Linkedin, ArrowUpRight, History, Building2, Users2 } from 'lucide-react';
import { Container } from '@/components/layout';
import { useRef } from 'react';

const STATS = [
  { label: 'Founded', value: '2017', sub: 'New Delhi, India' },
  { label: 'Experts', value: '50+', sub: 'CA, CS & Legal Minds' },
  { label: 'Countries', value: '12+', sub: 'Global Jurisdictions' },
  { label: 'Success Rate', value: '99%', sub: 'Compliance Accuracy' }
];

const LEADERSHIP = [
  {
    name: "CA Pankaj Singhal",
    role: "Founder & Managing Partner",
    bio: "A highly accomplished Chartered Accountant with over 20 years of progressive experience in finance, process optimization, and leadership. Pankaj is the visionary behind Biz Setup Global's client-centric approach.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    linkedIn: "#"
  },
  {
    name: "Srinivasan",
    role: "Strategic Board Advisor",
    bio: "Former CFO at Wipro ($1.8B BU) with 33+ years of corporate excellence. Specializes in financial transformation, M&A, international taxation, and US GAAP migration projects.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    linkedIn: "#"
  },
  {
    name: "CS Sibaranjit Jena",
    role: "Head, Global Incorporation",
    bio: "Oversees finance, human resources, risk, and legal functions, ensuring high-integrity delivery for complex global incorporation and restructuring projects.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    linkedIn: "#"
  }
];

const VALUES = [
  { 
    icon: Shield, 
    title: "Institutional Ethics", 
    description: "Maintaining the absolute highest standards of integrity and transparency in every jurisdictional filing and advisory engagement.",
    color: "#2563EB"
  },
  { 
    icon: Globe, 
    title: "Global Perspective", 
    description: "Synthesizing international best practices with local regulatory nuances to provide a seamless cross-border corporate experience.",
    color: "#10B981"
  },
  { 
    icon: Award, 
    title: "Uncompromising Quality", 
    description: "Our definition of success is the long-term scalability and audit-readiness of the businesses we support across the globe.",
    color: "#F59E0B"
  },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  return (
    <div ref={containerRef} className="bg-white selection:bg-blue-50 selection:text-blue-600">
      
      {/* ── PREMIUM HERO ────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#030508]">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Corporate background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030508]/60 to-[#030508]" />
        </motion.div>

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-300">
                Institutional Profile
              </span>
            </div>
            
            <h1 
              className="font-bold leading-[1.05] tracking-tight mb-8 text-white" 
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              The architecture of<br />
              <span className="font-serif italic text-blue-400 font-normal">Global Compliance.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Building the future of cross-border corporate registration and regulatory expertise since 2017.
            </p>

            <div className="flex justify-center gap-6">
               <div className="w-px h-16 bg-gradient-to-b from-blue-500/50 to-transparent" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── THE STORY ───────────────────────────────────────────── */}
      <section className="py-32 relative bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -mr-64 -mt-32" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600 mb-6">
                <div className="w-5 h-px bg-blue-600" />
                Our Origins
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-8 leading-tight">
                From a dedicated tax lab to a <span className="font-serif italic text-blue-600">global advisory force.</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  Biz Setup Global was born from a singular vision: to demystify the complexities of 
                  international corporate law. What started as <span className="font-bold text-[#0B1F3A]">BIZ SETUP LAB</span> in 2017 has evolved into an 
                  institutional-grade consulting firm.
                </p>
                <p>
                  Today, we serve as the primary compliance partner for high-growth startups and global 
                  enterprises navigating the waters of cross-border expansion, multi-jurisdictional 
                  taxation, and strategic corporate restructuring.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Box 1: Image Overlay */}
              <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl bg-slate-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                  alt="Boardroom" 
                />
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Box 2: 7 Years */}
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col justify-between shadow-lg hover:bg-white hover:shadow-2xl transition-all duration-300">
                <History className="w-10 h-10 text-blue-600 mb-6 opacity-40" />
                <div>
                   <div className="text-4xl font-bold text-[#0B1F3A] mb-1">7Y+</div>
                   <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">
                     Operational Legacy
                   </div>
                </div>
              </div>

              {/* Box 3: 10+ Jurisdictions */}
              <div className="p-8 rounded-[2rem] bg-[#2563EB] text-white flex flex-col justify-between shadow-xl shadow-blue-900/30">
                <Building2 className="w-10 h-10 mb-6 opacity-40" />
                <div>
                   <div className="text-4xl font-bold mb-1">10+</div>
                   <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-70">
                     Primary Jurisdictions
                   </div>
                </div>
              </div>

              {/* Box 4: New Metric - 50+ Experts */}
              <div className="p-8 rounded-[2rem] bg-[#0B1F3A] text-white flex flex-col justify-between shadow-xl shadow-slate-900/40">
                <Users2 className="w-10 h-10 mb-6 opacity-40 text-blue-400" />
                <div>
                   <div className="text-4xl font-bold mb-1">50+</div>
                   <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-70">
                     Corporate Experts
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            {STATS.map((stat, i) => (
              <div key={i} className={`text-center lg:px-8 ${i < 3 ? 'lg:border-r border-slate-200' : ''}`}>
                 <div className="text-5xl font-serif font-bold text-[#0B1F3A] mb-2 italic tracking-tight">{stat.value}</div>
                 <div className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-1">{stat.label}</div>
                 <div className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">{stat.sub}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── VISION & MISSION: THE CORE ADVISORY FRAMEWORK ───── */}
      <section className="py-36 bg-white relative overflow-hidden border-t border-slate-100">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Framework Image & Strategic Accent */}
            <motion.div 
               className="lg:col-span-5 relative"
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                    alt="Corporate Strategy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
                  
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="text-white/60 text-[10px] font-bold uppercase tracking-[0.25em] mb-2">Strategy Framework</div>
                    <div className="text-white text-2xl font-serif italic">Institutionalizing global growth.</div>
                  </div>
               </div>
               
               {/* Decorative background element */}
               <div className="absolute -bottom-10 -right-10 w-full h-full border-[10px] border-slate-50 rounded-[2.5rem] -z-10" />
            </motion.div>

            {/* Right: The Narrative */}
            <div className="lg:col-span-7 space-y-16">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="flex gap-10 group"
               >
                  <div className="flex-shrink-0">
                     <div className="w-16 h-16 rounded-full border border-blue-100 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                        <Target className="w-7 h-7" />
                     </div>
                  </div>
                  <div>
                     <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-4 font-sans italic">Long-term Vision</div>
                     <h3 className="text-3xl font-serif font-bold text-[#0B1F3A] mb-5 tracking-tight">
                        The partner for <span className="text-blue-600 italic">borderless expansion.</span>
                     </h3>
                     <p className="text-lg text-slate-500 leading-relaxed font-light">
                        To be the most trusted global partner for corporate structuring—delivering precision-driven solutions 
                        that institutionalize startups and empower multinational enterprises to scale without borders.
                     </p>
                  </div>
               </motion.div>

               <div className="w-full h-px bg-slate-100 ml-24" />

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="flex gap-10 group"
               >
                  <div className="flex-shrink-0">
                     <div className="w-16 h-16 rounded-full border border-blue-100 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                        <Award className="w-7 h-7" />
                     </div>
                  </div>
                  <div>
                     <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-4 font-sans italic">Strategic Mission</div>
                     <h3 className="text-3xl font-serif font-bold text-[#0B1F3A] mb-5 tracking-tight">
                        Precision in <span className="text-blue-600 italic">advisory ecosystem.</span>
                     </h3>
                     <p className="text-lg text-slate-500 leading-relaxed font-light">
                        Providing a seamless ecosystem of advisory where CAs, Company Secretaries, and Legal Strategists work 
                        in unified precision to ensure compliance integrity, financial stability, and global scalability.
                     </p>
                  </div>
               </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── LEADERSHIP BOARD ─────────────────────────────────── */}
      <section className="py-32 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24">
             <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600 mb-6 font-sans">
                  The Principals
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight mb-4">
                  Guided by years of <span className="font-serif italic text-blue-600">institutional wisdom.</span>
                </h2>
                <p className="text-lg text-slate-500 font-light">
                  Our board brings together deca-level experience from Fortune 500 financial leadership and national-level legal advisory.
                </p>
             </div>
             <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-slate-200 text-[#0B1F3A] font-bold text-sm tracking-widest uppercase hover:bg-slate-50 transition-all">
                The Full Board
                <ArrowUpRight className="w-4 h-4" />
             </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {LEADERSHIP.map((member, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="group"
               >
                  <div className="relative aspect-[4/5.5] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl transition-all duration-300 group-hover:-translate-y-4">
                     <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent opacity-80" />
                     
                     <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex justify-between items-end">
                           <div>
                              <div className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.25em] mb-2">{member.role}</div>
                              <h3 className="text-2xl font-serif font-bold text-white italic">{member.name}</h3>
                           </div>
                           <Linkedin className="w-6 h-6 text-white/50 hover:text-white transition-colors cursor-pointer" />
                        </div>
                     </div>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">
                     {member.bio}
                  </p>
               </motion.div>
             ))}
          </div>
        </Container>
      </section>

      {/* ── THE BSG WAY: PRINCIPLES OF EXCELLENCE ──────────── */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
             <div className="max-w-2xl">
                <div className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.25em] mb-6">Execution Standards</div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] italic font-serif">The BSG Way</h2>
                <div className="w-12 h-1 bg-blue-600 mt-6 rounded-full" />
             </div>
             <p className="text-lg text-slate-500 font-light max-w-sm">
               Our operational DNA is built on three non-negotiable pillars of consultancy.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 rounded-[2.5rem] overflow-hidden bg-white shadow-2xl">
            {VALUES.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.055 }}
                className={`p-14 group transition-all duration-300 hover:bg-slate-50/50 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-slate-200' : ''}`}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-10 transition-all duration-300 group-hover:scale-110" style={{ background: `${val.color}10`, color: val.color }}>
                   <val.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3A] mb-5 tracking-tight">{val.title}</h3>
                <p className="text-base text-slate-500 leading-relaxed font-light mb-10">{val.description}</p>
                
                <div className="flex items-center gap-2 group/link cursor-default">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                   <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 group-hover/link:text-blue-600 transition-colors">Strategic Pillar {i + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA MINI ──────────────────────────────────────────── */}
      <Container className="relative z-10 -mt-24">
         <div className="p-12 md:p-20 rounded-[3rem] bg-[#2563EB] text-white shadow-[0_32px_80px_rgba(37,99,235,0.35)] flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-[80px] -ml-32 -mb-32" />

            <div className="relative z-10 max-w-xl text-center lg:text-left">
               <h2 className="text-4xl md:text-5xl font-serif font-bold italic mb-6 text-white tracking-tight">Partner with <span className="font-sans not-italic font-extrabold text-white">specialized</span> minds.</h2>
               <p className="text-xl text-white/70 font-light max-w-sm mx-auto lg:mx-0">Experience the high-precision focus of an institutional compliance desk.</p>
            </div>
            <a 
              href="#contact" 
              className="relative z-10 px-10 py-5 bg-white text-[#2563EB] font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-white/20 shadow-2xl flex items-center gap-3 group"
            >
               Consult Our Senior Partners
               <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
         </div>
      </Container>
      
      <div className="h-24" />
    </div>
  );
}
