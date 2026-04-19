import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ReactLenis } from '@studio-freight/react-lenis';
import Navbar from '@/components/navbar/Navbar';
import { Footer } from '@/components/layout';
import Chatbot from '@/components/chatbot/Chatbot';
import { ROUTES } from '@/constants/routes';

const Home                = lazy(() => import('@/pages/home').then((m) => ({ default: m.Home })));
const Contact             = lazy(() => import('@/pages/contact').then((m) => ({ default: m.Contact })));
const About               = lazy(() => import('@/pages/about/About'));
const BusinessSetup       = lazy(() => import('@/pages/services/BusinessSetup').then((m) => ({ default: m.BusinessSetup })));
const GlobalIncorporation = lazy(() => import('@/pages/services/GlobalIncorporation').then((m) => ({ default: m.GlobalIncorporation })));
const StartupServices     = lazy(() => import('@/pages/services/StartupServices').then((m) => ({ default: m.StartupServices })));
const Compliances         = lazy(() => import('@/pages/services/Compliances').then((m) => ({ default: m.Compliances })));
const TaxReturns          = lazy(() => import('@/pages/services/TaxReturns').then((m) => ({ default: m.TaxReturns })));
const Blog                = lazy(() => import('@/pages/blog/Blog').then((m) => ({ default: m.Blog })));
const ServiceDetail       = lazy(() => import('@/pages/services/ServiceDetail').then((m) => ({ default: m.ServiceDetail })));
const ServiceDirectory    = lazy(() => import('@/pages/services/ServiceDirectory').then((m) => ({ default: m.ServiceDirectory })));

/**
 * Premium Scroll Progress Bar
 */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}

function PageLoader() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[99]" 
      aria-hidden
    >
      <div className="relative mb-6">
        <div className="w-12 h-12 rounded-full border-[3px] border-blue-500/10 border-t-blue-600 animate-spin" />
      </div>
      <div className="text-[10px] font-bold text-primary/30 tracking-[0.3em] uppercase">Initializing Engine</div>
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ReactLenis root options={{ 
      duration: 0.6, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
      lerp: 0.08, // Slightly more snappy than 0.1
      infinite: false
    }}>
      <div className="min-h-screen bg-white flex flex-col selection:bg-blue-100 selection:text-blue-700" style={{ color: '#0B1F3A' }}>
        <ScrollProgress />
        <Navbar />
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                <Routes location={location}>
                  <Route path={ROUTES.HOME}                 element={<Home />}                />
                  <Route path="/about"                       element={<About />}               />
                  <Route path={ROUTES.BUSINESS_SETUP}       element={<BusinessSetup />}       />
                  <Route path={ROUTES.GLOBAL_INCORPORATION}  element={<GlobalIncorporation />}  />
                  <Route path={ROUTES.STARTUP_SERVICES}     element={<StartupServices />}     />
                  <Route path={ROUTES.COMPLIANCES}          element={<Compliances />}         />
                  <Route path={ROUTES.TAX_RETURNS}          element={<TaxReturns />}          />
                  <Route path={ROUTES.BLOG}                 element={<Blog />}                />
                  <Route path={ROUTES.CONTACT}              element={<Contact />}             />
                  <Route path={ROUTES.SERVICE_DETAIL}       element={<ServiceDetail />}       />
                  <Route path={ROUTES.SERVICE_DIRECTORY}    element={<ServiceDirectory />}    />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </Suspense>
        </main>
        
        <Footer />
        <Chatbot />
      </div>
    </ReactLenis>
  );
}

export default App;

