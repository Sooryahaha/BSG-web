import { ServiceLayout } from '@/components/layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function StartupServices() {
  return (
    <ServiceLayout 
      title="Startup Support Services"
      subtitle="Navigating the complex landscape of fundraising, legal agreements, and government registrations for high-growth enterprises."
      heroImage="/service-4.jpg"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">Empowering Entrepreneurs</h2>
          <p className="text-lg text-text-muted mb-8 leading-relaxed">
            From the initial term sheet to the final shareholders agreement, we provide the legal and financial 
            scaffolding your startup needs to scale with confidence.
          </p>
          
          <div className="grid gap-6">
            {[
              { 
                slug: 'startup-india',
                name: 'Startup India Registration', 
                desc: 'Government of India recognition focusing on tax benefits, simple compliance, and faster IPR processes.',
                icon: 'rocket'
              },
              { 
                slug: 'sha',
                name: 'Shareholders Agreement (SHA)', 
                desc: 'Critically important legal binding between founders and investors to manage ownership and exit strategies.',
                icon: 'file-text'
              },
              { 
                slug: 'nda',
                name: 'NDA & Legal Agreements', 
                desc: 'Master Service Agreements, Service Level Agreements, and Founders Agreements crafted by experts.',
                icon: 'shield'
              }
            ].map((item, idx) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
              >
                <Link 
                  to={`/service/${item.slug}`}
                  className="premium-card p-8 bg-background-alt border-none flex flex-col md:flex-row gap-6 items-start hover:shadow-premium hover:-translate-y-1 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="font-bold text-accent">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3 font-serif italic group-hover:text-accent transition-colors">{item.name}</h3>
                    <p className="text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-background-alt border border-border p-10 rounded-[32px] shadow-sm">
           <h3 className="text-2xl font-serif font-bold mb-4 italic text-primary">Fundraising Support</h3>
           <p className="text-text-muted leading-relaxed mb-6">
              Expert advice on **Term Sheets**, due diligence, and capital infusion to ensure you get the best terms for your vision.
           </p>
           <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-white rounded-lg text-xs font-bold text-primary border border-border">EQUITY ALLOCATION</span>
              <span className="px-4 py-2 bg-white rounded-lg text-xs font-bold text-primary border border-border">VALUATION REPORT</span>
              <span className="px-4 py-2 bg-white rounded-lg text-xs font-bold text-primary border border-border">LEGAL AUDIT</span>
           </div>
        </section>
      </div>
    </ServiceLayout>
  );
}
