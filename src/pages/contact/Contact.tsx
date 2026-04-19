import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Clock, Phone, User, MessageSquare, Building2, ArrowRight, CheckCircle2, Globe2, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const TEXT   = '#0B1F3A';
const MUTED  = '#5B7A99';
const ACCENT = '#2563EB';
const BORDER = 'rgba(11,31,58,0.08)';
const SHADOW_H = '0 32px 80px rgba(11,31,58,0.14), 0 8px 24px rgba(37,99,235,0.08)';

const ease = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Consultation Request: ${form.service} — ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:contact@bizsetupglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }} className="selection:bg-blue-100 selection:text-blue-700">

      {/* ── CINEMATIC INSTITUTIONAL HERO ── */}
      <section className="relative pt-44 pb-32 overflow-hidden bg-[#030712]">
        {/* Background Image with sophisticated mask */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.jpg" 
            alt="Global Advisory" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.5]"
          />
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'radial-gradient(circle at 20% 50%, rgba(11,31,58,0.95) 0%, rgba(11,31,58,0.8) 50%, rgba(3,7,18,0.95) 100%)' 
            }} 
          />
        </div>

        {/* Floating Orbs for depth */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none gpu-layer" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none gpu-layer" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div
               initial="hidden"
               animate="visible"
               variants={{
                 visible: { transition: { staggerChildren: 0.05 } }
               }}
               className="max-w-2xl"
             >
               <motion.div 
                 variants={fadeUp} 
                 className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8 bg-blue-500/10 border border-blue-400/20 backdrop-blur-md"
               >
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-300">Global Advisory Desk</span>
               </motion.div>
   
               <motion.h1 
                 variants={{
                   hidden: { opacity: 0 },
                   visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
                 }}
                 initial="hidden"
                 animate="visible"
                 className="font-bold leading-[1.02] tracking-tighter mb-8 text-white" 
                 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}
               >
                 {"Let's Scale Your".split(' ').map((word, i) => (
                    <motion.span key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }} className="inline-block">{word}&nbsp;</motion.span>
                 ))}
                 <br />
                 {"Business Globally.".split(' ').map((word, i) => (
                    <motion.span key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }} className="text-blue-500 font-serif italic inline-block">{word}&nbsp;</motion.span>
                 ))}
               </motion.h1>
   
               <motion.p 
                 variants={fadeUp} 
                 className="text-xl leading-relaxed text-white/60 font-light mb-12 max-w-lg"
               >
                 Our global network of CAs, legal auditors, and jurisdictional experts are ready to architect your cross-border expansion.
               </motion.p>

               {/* Quick Stats/Trust Nodes */}
               <motion.div variants={fadeUp} className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                  {[
                    { icon: Globe2, label: '10+ Jurisdictions' },
                    { icon: ShieldCheck, label: 'Audit Ready' },
                    { icon: Zap, label: '4hr Response SLA' }
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-400">
                          <item.icon className="w-5 h-5" />
                       </div>
                       <span className="text-xs font-bold text-white/50 uppercase tracking-widest">{item.label}</span>
                    </div>
                  ))}
               </motion.div>
             </motion.div>

             {/* Visionary Branding Element */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 0.8, ease }}
               className="hidden lg:flex justify-end"
             >
                <div className="relative w-80 h-80">
                   <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
                   <div className="absolute inset-8 rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl font-serif italic text-white/5 select-none">BSG</div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-32 relative -mt-12 z-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-20 items-start">

            {/* Left — Info */}
            <motion.div
              className="lg:col-span-5 space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
            >
              {/* Contact items */}
              <div className="space-y-10">
                {[
                  {
                    icon: MapPin,
                    label: 'Global Headquarters',
                    content: '428, 1st Floor, 27th Main Rd,\n1st Sector, HSR Layout,\nBengaluru, Karnataka 560102',
                    multiline: true,
                  },
                  {
                    icon: Mail,
                    label: 'Strategic Inquiries',
                    content: 'contact@bizsetupglobal.com',
                    href: 'mailto:contact@bizsetupglobal.com',
                  },
                  {
                    icon: Phone,
                    label: 'Direct Advisory Line',
                    content: '+91 99999 00000',
                    href: 'tel:+919999900000',
                  },
                  {
                    icon: Clock,
                    label: 'Advisory Window',
                    content: 'Monday–Friday: 9:00 AM – 6:30 PM IST\nSat: 10:00 AM – 2:00 PM (Emergency Desk Only)',
                    multiline: true,
                  },
                ].map(({ icon: Icon, label, content, href, multiline }, idx) => (
                  <motion.div 
                    key={label}
                    variants={fadeUp}
                    className="flex gap-6 group"
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110"
                      style={{ background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.1)' }}
                    >
                      <Icon className="w-6 h-6 transition-colors duration-300" style={{ color: idx === 999 ? 'white' : ACCENT }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 transition-colors group-hover:text-blue-600" style={{ color: MUTED }}>{label}</div>
                      {href ? (
                        <a href={href} className="text-lg font-bold transition-colors hover:text-blue-600" style={{ color: TEXT }}>
                          {content}
                        </a>
                      ) : (
                        <p className="text-base font-medium leading-relaxed" style={{ color: TEXT }}>
                          {multiline ? content.split('\n').map((line, i) => <span key={i} className="block">{line}</span>) : content}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Global reach card */}
              <motion.div
                variants={fadeUp}
                className="rounded-[2.5rem] p-10 bg-slate-900 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                   <Globe2 className="w-24 h-24 text-white" />
                </div>
                <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-6">
                     <Building2 className="w-5 h-5 text-blue-400" />
                     <h4 className="text-lg font-bold text-white uppercase tracking-wider">Jurisdictional Network</h4>
                   </div>
                   <p className="text-sm leading-relaxed mb-8 text-white/50">
                     Facilitating legal movement and fiscal setups across Asia-Pacific, EMEA, and North American markets.
                   </p>
                   <div className="flex flex-wrap gap-2">
                     {['Singapore','UK','USA','UAE','India','Canada','Hong Kong'].map(c => (
                       <span key={c} className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full bg-white/5 text-white/60 border border-white/5 hover:border-blue-500/30 hover:text-white hover:bg-blue-600/10 transition-all cursor-default">
                         {c}
                       </span>
                     ))}
                   </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
            >
              <div
                className="rounded-[3rem] p-10 md:p-14 relative"
                style={{ background: '#ffffff', border: `1px solid ${BORDER}`, boxShadow: SHADOW_H }}
              >
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-3 tracking-tight" style={{ color: TEXT }}>Initiate Strategic Inquiry</h2>
                  <p className="text-lg font-light" style={{ color: MUTED }}>Our partners respond within a <span className="text-blue-600 font-bold">4-hour global window</span>.</p>
                </div>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 bg-blue-50 shadow-xl shadow-blue-500/10">
                      <CheckCircle2 className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: TEXT }}>Strategic Request Received</h3>
                    <p className="text-base mb-10 max-w-sm mx-auto font-light" style={{ color: MUTED }}>An advisory partner has been assigned to your case and will connect with your team shortly.</p>
                    <Link to="/" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 font-bold text-white text-xs uppercase tracking-widest transition-transform hover:scale-105 active:scale-95">
                      Return to Command Center <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Name */}
                      <div className="space-y-3">
                        <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Full Legal Name</label>
                        <div className="relative">
                          <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-600" />
                          <input
                            name="name" type="text" required placeholder="Johnathan Doe"
                            value={form.name}
                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                            className="w-full pl-8 pr-4 py-4 bg-transparent border-b border-slate-200 text-base outline-none transition-all placeholder:text-slate-300 focus:border-blue-600"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-3">
                        <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Enterprise Email</label>
                        <div className="relative">
                          <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-600" />
                          <input
                            name="email" type="email" required placeholder="ceo@enterprise.com"
                            value={form.email}
                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                            className="w-full pl-8 pr-4 py-4 bg-transparent border-b border-slate-200 text-base outline-none transition-all placeholder:text-slate-300 focus:border-blue-600"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-3">
                        <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Primary Phone</label>
                        <div className="relative">
                          <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-600" />
                          <input
                            name="phone" type="tel" placeholder="+1 000 000 0000"
                            value={form.phone}
                            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                            className="w-full pl-8 pr-4 py-4 bg-transparent border-b border-slate-200 text-base outline-none transition-all placeholder:text-slate-300 focus:border-blue-600"
                          />
                        </div>
                      </div>

                      {/* Service */}
                      <div className="space-y-3">
                        <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Hub Interest</label>
                        <div className="relative">
                          <Building2 className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-600" />
                          <select
                            name="service" required
                            value={form.service}
                            onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                            className="w-full pl-8 pr-4 py-4 bg-transparent border-b border-slate-200 text-base outline-none transition-all appearance-none cursor-pointer focus:border-blue-600"
                          >
                            <option value="">Select Domain…</option>
                            <option value="Business Setup">Indian Business Setup</option>
                            <option value="Global Incorporation">Overseas Expansion</option>
                            <option value="Startup Services">Venture & Startup Advisory</option>
                            <option value="Compliances">Audit & Secretarial</option>
                            <option value="Tax Returns">Fiscal & Tax Compliance</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-3">
                      <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Expansion Brief</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-0 top-6 w-4 h-4 text-blue-600" />
                        <textarea
                          name="message" required rows={4}
                          placeholder="Briefly describe your jurisdictional and compliance goals…"
                          value={form.message}
                          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                          className="w-full pl-8 pr-4 py-4 bg-transparent border-b border-slate-200 text-base outline-none resize-none transition-all placeholder:text-slate-300 focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="pt-8">
                       <button
                         type="submit"
                         className="w-full py-5 rounded-[2rem] font-bold text-xs uppercase tracking-[0.3em] text-white flex items-center justify-center gap-3 transition-all hover:bg-blue-700 active:scale-[0.98] shadow-2xl shadow-blue-500/30"
                         style={{ background: ACCENT }}
                       >
                         Launch Strategic Inquiry
                         <ArrowRight className="w-5 h-5" />
                       </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
