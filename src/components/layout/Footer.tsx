import { Link } from 'react-router-dom';
import { Container } from './Container';
import { Mail, MapPin, Linkedin, ArrowRight, Phone } from 'lucide-react';

const FOOTER_SERVICES = [
  { label: 'Business Setup India',     path: '/business-setup'       },
  { label: 'Private Ltd Company',      path: '/service/private-limited' },
  { label: 'LLP Registration',         path: '/service/llp'          },
  { label: 'GST Registration',         path: '/service/gst-registration' },
  { label: 'Global Incorporation',     path: '/global-incorporation' },
  { label: 'Sitemap & Directory',      path: '/services'             },
];

const FOOTER_COMPANY = [
  { label: 'About BSG',       path: '/about'   },
  { label: 'Leadership Board',path: '/about'   },
  { label: 'Contact Us',      path: '/contact' },
  { label: 'Blog & Resources',path: '/blog'    },
];

const ACCENT = '#2563EB';

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#0B1F3A' }}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)' }} />

      {/* Ambient glows */}
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.03) 0%, transparent 70%)' }} />

      {/* CTA strip */}
      <div className="border-b py-14 relative z-10" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] mb-3" style={{ color: ACCENT }}>Free Consultation</div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold italic text-white leading-tight max-w-sm">
                Let's Build Your Global Business Together
              </h3>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 flex items-center gap-2 text-white font-bold text-sm px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/40"
              style={{ background: ACCENT }}
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </div>

      {/* Main footer */}
      <Container className="py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <img
                src="/logo.png"
                alt="BSG Global"
                style={{ height: 36, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
              <div className="text-[9px] uppercase tracking-[0.22em] mt-2 font-semibold" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Global Compliance Partners
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Premier CA and compliance consulting firm delivering institutional-grade advisory for startups and global enterprises.
            </p>
            <div className="flex gap-3">
              {[Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(37,99,235,0.6)';
                    (e.currentTarget as HTMLElement).style.color = ACCENT;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)';
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.18em] mb-6" style={{ color: 'rgba(255,255,255,0.3)' }}>Services</h5>
            <ul className="space-y-3.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.path}>
                  <Link
                    to={s.path}
                    className="text-sm flex items-center gap-2 group transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }} />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.18em] mb-6" style={{ color: 'rgba(255,255,255,0.3)' }}>Company</h5>
            <ul className="space-y-3.5">
              {FOOTER_COMPANY.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.path}
                    className="text-sm flex items-center gap-2 transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }} />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.18em] mb-6" style={{ color: 'rgba(255,255,255,0.3)' }}>Office</h5>
            <ul className="space-y-5">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  428, 1st Floor, 27th Main Rd,<br />HSR Layout, Bengaluru 560102
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>+91 99999 00000</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: ACCENT }} />
                <a href="mailto:contact@bizsetupglobal.com" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = ACCENT)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}>
                  contact@bizsetupglobal.com
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <div className="text-[10px] uppercase tracking-[0.18em] mb-3 font-bold" style={{ color: 'rgba(255,255,255,0.25)' }}>Operating In</div>
              <div className="flex flex-wrap gap-2">
                {['IN','SG','UK','US','AE','CA'].map((code) => (
                  <span
                    key={code}
                    className="text-[10px] font-bold rounded-full px-2.5 py-1 transition-colors cursor-default"
                    style={{ color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {code}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="py-6 relative z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] font-medium" style={{ color: 'rgba(255,255,255,0.2)' }}>
              © {new Date().getFullYear()} Biz Setup Global. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Legal'].map((item) => (
                <a key={item} href="#" className="text-[11px] transition-colors" style={{ color: 'rgba(255,255,255,0.2)' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.2)')}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
