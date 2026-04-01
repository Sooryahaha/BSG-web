import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, ArrowRight, 
  Building2, Globe2, Rocket, CheckCircle2, 
  Receipt, FileText, Briefcase, Shield,
  Users2, Landmark, Scale, Search, Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  {
    label: 'Services',
    description: 'Premier business incorporation across India and global hubs.',
    children: [
      { path: '/business-setup',              label: 'Business Setup Hub',        icon: Building2 },
      { path: '/service/private-limited',     label: 'Private Limited Company',   icon: Shield },
      { path: '/service/llp',                 label: 'LLP Registration',          icon: Users2 },
      { path: '/service/opc',                 label: 'One Person Company',        icon: Shield },
      { path: '/service/sole-proprietorship', label: 'Sole Proprietorship',       icon: Shield },
      { path: '/service/section-8-company',   label: 'Section 8 (NGO)',           icon: Landmark },
      { path: '/service/producer-company',    label: 'Producer Company',          icon: Landmark },
      { path: '/service/wos',                 label: 'Wholly Owned Subsidiary',   icon: Globe2 },
      { path: '/service/branch-office',       label: 'Branch Office',             icon: Building2 },
      { path: '/service/project-office',      label: 'Project Office',            icon: Building2 },
      { path: '/service/liaison-office',      label: 'Liaison Office',            icon: Building2 },
      { path: '/global-incorporation',        label: 'Global Incorporation Hub',  icon: Globe2 },
      { path: '/service/singapore',           label: 'Singapore Company',         icon: Globe2 },
      { path: '/service/usa',                 label: 'USA Incorporation',         icon: Globe2 },
      { path: '/service/uk',                  label: 'UK Incorporation',          icon: Globe2 },
      { path: '/service/dubai',               label: 'Dubai Setup',               icon: Globe2 },
      { path: '/service/thailand',            label: 'Thailand Setup',            icon: Globe2 },
    ],
  },
  {
    label: 'Startup',
    description: 'Equity legalities and regulatory advisory for startups.',
    children: [
      { path: '/startup-services',            label: 'Startup Services Hub',      icon: Rocket },
      { path: '/service/startup-india',       label: 'Startup India DPIIT',       icon: Rocket },
      { path: '/service/term-sheet',          label: 'Term Sheet Drafting',       icon: FileText },
      { path: '/service/sha',                 label: 'Shareholders Agreement',    icon: FileText },
      { path: '/service/founders-agreement',  label: 'Founders Agreement',        icon: FileText },
      { path: '/service/nda',                 label: 'Non-Disclosure Agreement',  icon: FileText },
      { path: '/service/sla',                 label: 'Service Level Agreement',   icon: FileText },
      { path: '/service/msa',                 label: 'Master Service Agreement',  icon: FileText },
    ],
  },
  {
    label: 'Compliance',
    description: 'Ongoing tax, legal, and board-level adherence management.',
    children: [
      { path: '/compliances',                 label: 'Compliance Hub',            icon: CheckCircle2 },
      { path: '/service/private-ltd-compliance', label: 'Pvt Ltd Annual Filing', icon: CheckCircle2 },
      { path: '/service/llp-compliance',      label: 'LLP Annual Filing',         icon: CheckCircle2 },
      { path: '/service/opc-compliance',      label: 'OPC Annual Filing',         icon: CheckCircle2 },
      { path: '/service/wos-compliance',      label: 'WOS Annual Filing',         icon: CheckCircle2 },
      { path: '/service/add-director',        label: 'Add Director',              icon: Users2 },
      { path: '/service/remove-director',     label: 'Remove Director',           icon: Users2 },
      { path: '/service/add-designated-partner', label: 'Add LLP Partner',        icon: Users2 },
      { path: '/service/remove-designated-partner', label: 'Remove LLP Partner',  icon: Users2 },
      { path: '/service/increase-share-capital', label: 'Increase Share Capital', icon: Landmark },
      { path: '/service/share-certificate',   label: 'Share Certificate Issue',   icon: FileText },
      { path: '/service/name-change',         label: 'Company Name Change',       icon: Building2 },
      { path: '/service/changes-in-llp',      label: 'Changes in LLP',            icon: Building2 },
      { path: '/service/share-transfer',      label: 'Share Transfer',            icon: Users2 },
      { path: '/service/winding-up',          label: 'Winding Up / Closure',      icon: Scale },
      { path: '/service/closing-llp',         label: 'Closing LLP',               icon: Scale },
    ],
  },
  {
    label: 'Tax',
    description: 'GST filings, TDS audits, and international tax planning.',
    children: [
      { path: '/tax-returns',                 label: 'Tax & GST Hub',             icon: Receipt },
      { path: '/service/gst-registration',    label: 'GST Registration',          icon: Receipt },
      { path: '/service/gst-return-filing',   label: 'GST Return Filing',         icon: Receipt },
      { path: '/service/income-tax-filing',   label: 'Income Tax Return (ITR)',   icon: Receipt },
      { path: '/service/tds-compliance',      label: 'TDS Returns',               icon: Receipt },
      { path: '/service/dsc',                 label: 'DSC Registration',          icon: FileText },
      { path: '/service/msme',                label: 'MSME / Udyam',              icon: Building2 },
      { path: '/service/iec',                 label: 'Import Export Code (IEC)',  icon: Globe2 },
      { path: '/service/pf-registration',     icon: Shield, label: 'PF Registration' },
      { path: '/service/esi-registration',    icon: Shield, label: 'ESI Registration' },
      { path: '/service/shops-establishment', icon: Building2, label: 'Shops & Establishment' },
      { path: '/service/professional-tax',    icon: Landmark, label: 'Professional Tax' },
      { path: '/services',                    icon: Briefcase, label: 'View All Services' },
    ],
  },
  { path: '/about',   label: 'About' },
  { path: '/contact', label: 'Contact' },
] as const;

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen,   setIsMenuOpen]   = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { 
    setIsMenuOpen(false); 
    setOpenDropdown(null); 
    if (timeoutId) clearTimeout(timeoutId);
  }, [location]);

  const handleMouseEnter = (label: string) => {
    if (timeoutId) clearTimeout(timeoutId);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // Small delay to prevent accidental closure or flicker
    setTimeoutId(id);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 px-8 pointer-events-none">
        <motion.div
          className="pointer-events-auto w-full max-w-7xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className={`flex items-center justify-between h-[76px] rounded-full px-10 border transition-all duration-500 relative ${
              scrolled 
                ? 'bg-[#0B1F3A]/85 backdrop-blur-3xl border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.3)]' 
                : 'bg-transparent border-transparent'
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 group">
              <img
                src="/logo.png"
                alt="BSG Global"
                className="h-10 w-auto object-contain brightness-0 invert transition-all group-hover:scale-105"
              />
            </Link>

            {/* Desktop Mega-Menu Links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isDropdown = 'children' in link;
                const active = location.pathname === (isDropdown ? '' : link.path);

                if (isDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="static group/nav-item"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all ${
                          openDropdown === link.label ? 'text-white' : 'text-white/60 group-hover/nav-item:text-white'
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Bridge to prevent menu closing between button and menu */}
                      {openDropdown === link.label && (
                        <div className="absolute top-[68px] left-0 right-0 h-[20px] bg-transparent z-40 pointer-events-auto" />
                      )}

                      {/* FIXED BRIDGE MEGA MENU: Locked in the same place for all links */}
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 1 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 1 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-[88px] left-0 right-0 z-[100] px-0 flex justify-center"
                          >
                            <div className="w-full bg-[#0B1F3A]/95 backdrop-blur-[40px] rounded-[3rem] shadow-[0_64px_120px_rgba(0,0,0,0.5)] border border-white/10 flex overflow-hidden min-h-[500px]">
                               
                               {/* Left Summary Pane */}
                               <div className="w-[30%] bg-white/5 p-12 flex flex-col justify-between border-r border-white/5">
                                  <div>
                                     <div className="w-14 h-14 rounded-3xl bg-blue-600 flex items-center justify-center text-white mb-10 shadow-2xl shadow-blue-600/30">
                                        <Briefcase className="w-7 h-7" />
                                     </div>
                                     <h4 className="text-3xl font-serif font-bold italic text-white mb-6 tracking-tight">{link.label}</h4>
                                     <p className="text-base text-white/50 font-light leading-relaxed">
                                       {link.description}
                                     </p>
                                  </div>
                                  
                                  <div className="space-y-6">
                                     <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                        Board Level Advisory
                                     </div>
                                     <Link to="/contact" className="inline-flex items-center gap-3 py-4 px-8 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-white/10 transition-all group/btn">
                                        Consult Partners 
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                     </Link>
                                  </div>
                               </div>

                               {/* Right Grid Pane */}
                               <div className="w-[70%] p-12 pr-6">
                                  <div className="grid grid-cols-2 gap-3 custom-scrollbar overflow-y-auto max-h-[440px] pr-8">
                                     {link.children.map((child) => {
                                        const activeChild = location.pathname === child.path;
                                        return (
                                          <Link
                                            key={child.path}
                                            to={child.path}
                                            className="flex items-center gap-5 px-6 py-4.5 rounded-[1.5rem] group transition-all relative"
                                          >
                                            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all relative z-10 ${activeChild ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white/5 text-white/40 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-blue-600/30'}`}>
                                               <child.icon className="w-5 h-5" />
                                            </div>
                                            <div className="flex flex-col relative z-10">
                                               <span className={`text-[15px] font-bold tracking-tight transition-colors ${activeChild ? 'text-blue-400' : 'text-white/60 group-hover:text-white'}`}>
                                                  {child.label}
                                               </span>
                                            </div>
                                            {activeChild && (
                                              <motion.div 
                                                layoutId="active-dot" 
                                                className="absolute right-6 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(37,99,235,0.8)]" 
                                              />
                                            )}
                                          </Link>
                                        );
                                     })}
                                  </div>
                               </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all relative ${
                      active ? 'text-white bg-white/10' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {active && (
                       <motion.div layoutId="nav-glow" className="absolute inset-0 bg-blue-500/20 blur-md rounded-full -z-10" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Action Bar */}
            <div className="flex items-center gap-4">
              <div className="hidden xl:flex items-center gap-4 pr-6 border-r border-white/10 text-white/50">
                 <button className="hover:text-white transition-colors"><Search className="w-5 h-5" /></button>
                 <a href="tel:+919999900000" className="hover:text-white transition-colors"><Phone className="w-5 h-5" /></a>
              </div>
              <Link
                to="/contact"
                className="hidden md:flex items-center gap-2 py-3.5 px-8 rounded-full bg-blue-600 text-white text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-blue-900/20 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 group"
              >
                Launch Strategy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white active:scale-95 transition-all"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* ── MOBILE OVERLAY ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#0B1F3A] lg:hidden overflow-y-auto pt-36 px-10 pb-16 flex flex-col"
          >
            <div className="space-y-4">
               {NAV_LINKS.map((link) => {
                 if ('children' in link) {
                   return (
                     <div key={link.label} className="pt-8 first:pt-0">
                        <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-400 mb-6 flex items-center gap-4 group">
                           {link.label}
                           <div className="flex-grow h-px bg-white/5 group-active:bg-blue-400 transition-all" />
                        </div>
                        <div className="grid gap-3">
                           {link.children.map(child => (
                             <Link key={child.path} to={child.path} className="flex items-center gap-6 py-4.5 group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 group-active:bg-blue-600 group-active:text-white transition-all">
                                   <child.icon className="w-6 h-6" />
                                </div>
                                <span className="text-xl font-bold text-white group-active:text-blue-400 transition-colors uppercase tracking-tight">{child.label}</span>
                             </Link>
                           ))}
                        </div>
                     </div>
                   );
                 }
                 return (
                   <Link key={link.path} to={link.path} className="text-5xl font-serif font-bold italic py-8 border-b border-white/5 block text-white hover:text-blue-400 transition-colors">
                      {link.label}
                   </Link>
                 );
               })}
            </div>
            
            <Link to="/contact" className="mt-20 w-full py-6 rounded-full bg-blue-600 text-white font-bold text-xs uppercase tracking-[0.25em] shadow-2xl shadow-blue-900/40 text-center">
               Consult Senior Partner
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
