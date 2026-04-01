import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ServiceLayout } from '@/components/layout';
import { SERVICE_PAGES } from '@/data/servicePages';
import { ChevronRight, ArrowRight } from 'lucide-react';

export function ServiceDirectory() {
  // Group pages by category based on their subtitle/badge
  const categories = [
    { title: 'Indian Business Setup',  slugs: ['sole-proprietorship', 'partnership-firm', 'llp', 'opc', 'private-limited', 'producer-company', 'section-8-company'] },
    { title: 'Foreign & Subsidy',      slugs: ['wos', 'branch-office', 'project-office', 'liaison-office'] },
    { title: 'Registrations',          slugs: ['dsc', 'msme', 'iec', 'professional-tax', 'pf-registration', 'esi-registration', 'shops-establishment'] },
    { title: 'Global Incorporation',   slugs: ['singapore', 'uk', 'usa', 'dubai', 'thailand'] },
    { title: 'Startup Services',       slugs: ['startup-india', 'term-sheet', 'sha', 'founders-agreement', 'nda', 'sla', 'msa'] },
    { title: 'Compliances',            slugs: ['private-ltd-compliance', 'llp-compliance', 'opc-compliance', 'wos-compliance', 'add-director', 'remove-director', 'add-designated-partner', 'remove-designated-partner', 'winding-up', 'closing-llp', 'increase-share-capital', 'share-certificate', 'changes-in-llp', 'name-change', 'share-transfer'] },
    { title: 'Tax & GST',              slugs: ['gst-registration', 'gst-return-filing', 'income-tax-filing'] },
  ];

  return (
    <ServiceLayout 
      title="Complete Service Directory"
      subtitle="Institutional-grade corporate compliance and business solutions for local and global enterprises. Browse our entire service catalog below."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 pt-10">
        {categories.map((cat, i) => (
          <motion.div 
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-accent rounded-full" />
              <h3 className="text-xl font-bold text-primary font-serif italic">{cat.title}</h3>
            </div>
            
            <ul className="space-y-2.5">
              {cat.slugs.map(slug => {
                const service = SERVICE_PAGES[slug];
                if (!service) return null;
                return (
                  <li key={slug}>
                    <Link 
                      to={`/service/${slug}`}
                      className="group flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-border hover:bg-background-alt transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-text-muted group-hover:text-primary transition-colors">{service.title}</span>
                      <ChevronRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* CTA section at bottom of directory */}
      <div className="mt-24 p-12 bg-primary rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-premium relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold italic mb-4">Don't See What You Need?</h2>
          <p className="text-white/70 leading-relaxed">
            Our firm provides bespoke corporate advisory and legal solutions. If you have unique requirements or complex cross-border needs, speak with our principal consultants today.
          </p>
        </div>
        <Link 
          to="/contact"
          className="relative z-10 flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-white transition-all hover:shadow-2xl hover:-translate-y-1"
        >
          Book Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </ServiceLayout>
  );
}
