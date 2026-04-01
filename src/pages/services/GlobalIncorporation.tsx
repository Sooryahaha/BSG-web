import { ServiceLayout } from '@/components/layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, Zap, ArrowRight, 
  Scale, Landmark, Building2
} from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export function GlobalIncorporation() {
  const DESTINATIONS = [
    { 
      slug: 'singapore',
      name: 'Singapore', 
      img: '/destinations/singapore.png',
      desc: 'Asia\'s premier financial hub. Triple-A credit rating and world-class banking access.',
      data: { time: '1-3 Days', tax: '17% Flat', benefit: 'VC Haven' },
      accent: 'bg-red-600/5'
    },
    { 
      slug: 'uk',
      name: 'United Kingdom', 
      img: '/destinations/london.png',
      desc: 'Sophisticated legal framework. A prestigious bridge between European and Global markets.',
      data: { time: '5-10 Days', tax: '25% Corp', benefit: 'Stable Laws' },
      accent: 'bg-blue-900/5'
    },
    { 
      slug: 'usa',
      name: 'United States', 
      img: '/destinations/nyc.png',
      desc: 'Access to the world\'s deepest capital markets. Preferred by global technology startups.',
      data: { time: '2-3 Weeks', tax: '21% Fed', benefit: 'Investor Ready' },
      accent: 'bg-blue-600/5'
    },
    { 
      slug: 'dubai',
      name: 'Dubai (UAE)', 
      img: '/destinations/dubai.png',
      desc: 'Strategic Tax-Free environments through specialized Mainland and Free Zone setups.',
      data: { time: '7-12 Days', tax: '9% Corp', benefit: '100% Repatriation' },
      accent: 'bg-amber-600/5'
    }
  ];

  return (
    <ServiceLayout 
      title="Global Incorporation"
      subtitle="Strategizing your international footprint through the world's most business-friendly legal hubs."
      heroImage="/service-1.jpg"
    >
      <div className="space-y-32">
        
        {/* Strategic Intelligence Intro */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl">
                <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
                   <div className="w-10 h-px bg-blue-600" />
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">The Expansion Desk</span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#0B1F3A] tracking-tighter">
                   Scaling your <span className="font-serif italic font-normal text-blue-600">sovereign footprint.</span>
                </motion.h2>
             </motion.div>
             <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-slate-500 font-light max-w-sm italic md:text-right">Global expansion is a board-level decision. We provide the localized legal clarity required for success.</motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {DESTINATIONS.map((dest, idx) => (
              <motion.div 
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative h-[500px] rounded-[3.5rem] overflow-hidden shadow-premium hover:shadow-3xl transition-all duration-700"
              >
                <Link to={`/service/${dest.slug}`} className="absolute inset-0 z-20" aria-label={`View ${dest.name} requirements`} />
                <img 
                   src={dest.img} 
                   alt={dest.name} 
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" 
                />
                
                {/* Visual Gradient Stacks */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent group-hover:via-primary/20 transition-all duration-700" />
                
                {/* Floating Meta Stats Reveal */}
                <div className="absolute top-10 right-10 z-10 flex flex-col gap-2 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                   {[
                     { label: 'Wait', val: dest.data.time },
                     { label: 'Tax', val: dest.data.tax }
                   ].map(s => (
                     <div key={s.label} className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-center">
                        <div className="text-[8px] font-bold uppercase tracking-widest text-white/50">{s.label}</div>
                        <div className="text-xs font-bold text-white">{s.val}</div>
                     </div>
                   ))}
                </div>

                <div className="absolute inset-0 p-12 flex flex-col justify-end text-white">
                  <div className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.25em] mb-4">Strategic Jurisdiction</div>
                  <h3 className="text-4xl font-serif font-bold mb-6 italic leading-tight">{dest.name}</h3>
                  <p className="text-white/60 mb-8 leading-relaxed max-w-sm font-light">
                    {dest.desc}
                  </p>
                  
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-400 group-hover:translate-x-2 transition-transform">
                    Incorporate Now <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Foreign Subsidiary Intelligence */}
        <section className="bg-slate-900 rounded-[3.5rem] p-16 text-white relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-24 opacity-10 group-hover:scale-110 transition-transform">
              <Shield className="w-48 h-48" />
           </div>
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                    <Scale className="w-3.5 h-3.5" />
                    Cross-Border Compliance
                 </div>
                 <h3 className="text-3xl md:text-5xl font-serif font-bold italic mb-8 leading-[1.1]">RBI & FEMA<br />Regulatory Adherence.</h3>
                 <p className="text-lg text-white/50 leading-relaxed mb-10 font-light">
                    For multinationals establishing an Indian footprint, we handle the entire spectrum of **Wholly Owned Subsidiary (WOS)** setups, from name approval to post-incorporation FCGPR filings.
                 </p>
                 <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-blue-700 transition-all group/btn">
                    Speak to FDI Partner
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                 </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 {[
                   { icon: Landmark, title: 'WOS Setup', desc: '100% foreign equity control.' },
                   { icon: Building2, title: 'Branch Office', desc: 'Sovereign extension model.' },
                   { icon: Zap, title: 'Fast Tracking', desc: 'Liaison office within 3 weeks.' },
                   { icon: Scale, title: 'Advisory', desc: '1-on-1 FEMA specialization.' }
                 ].map((card, i) => (
                   <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <card.icon className="w-8 h-8 text-blue-400 mb-6" />
                      <div className="font-bold text-base mb-1">{card.title}</div>
                      <div className="text-xs text-white/40 font-light leading-relaxed">{card.desc}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

      </div>
    </ServiceLayout>
  );
}

