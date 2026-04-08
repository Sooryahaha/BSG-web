import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageSquare, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { queryRAG } from '@/lib/chatbot/rag';

interface Message {
  role: 'bot' | 'user';
  text?: string;
  data?: any;
  type?: 'lead_form' | 'feedback';
}

const QUICK_PROMPTS = [
  'How to register a company?',
  'GST registration requirements',
  'Add a director to my company',
  'Start a company in Dubai',
  'Talk to an expert'
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [givenFeedback, setGivenFeedback] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !hasGreeted) {
        setShowTooltip(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [isOpen, hasGreeted]);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      setShowBadge(false);
      setTimeout(() => {
        setMessages([
          {
            role: 'bot',
            data: {
              answer: `Welcome to BizSetupGlobal. I am your corporate advisory assistant.\n\nI can assist you with:\n• Corporate Registration & Incorporation\n• GST, PF, ESI & Statutory Compliance\n• Global Entity Setup (Dubai, Singapore, UK, USA)\n• Startup Advisory & Legal Documentation\n\nHow may I assist you with your business requirements today?`,
              confidence: 'high'
            }
          }
        ]);
      }, 500);
    }
  }, [isOpen, hasGreeted]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, showFeedback]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isTyping) return;
    
    setInputVal('');
    setMessages(prev => [...prev, { role: 'user', text }]);
    setIsTyping(true);

    const response = await queryRAG(text);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'bot', data: response }]);
  };

  const handleClose = () => {
    if (messages.length > 2 && !givenFeedback) {
      setShowFeedback(true);
    } else {
      setShowFeedback(false);
      setIsOpen(false);
    }
  };

  const submitFeedback = (rating: number) => {
    setGivenFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      setIsOpen(false);
    }, 1500);
  };

  const handleNavigation = (url: string) => {
    if (!url) return;
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes('bsg-website-psi.vercel.app') || parsed.hostname.includes('localhost') || parsed.hostname === window.location.hostname) {
        navigate(parsed.pathname + parsed.search);
      } else {
        window.open(url, '_blank');
      }
    } catch {
      if (url.startsWith('/')) {
        navigate(url);
      } else {
        window.open(url, '_blank');
      }
    }
  };

  const formatBotText = (text: string) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => {
      if (line.startsWith('•')) {
        return <li key={i} className="ml-4 mb-1 text-[13.5px] leading-relaxed relative before:content-['›'] before:absolute before:-left-4 before:text-blue-500 before:font-bold">{line.substring(2)}</li>;
      }
      return <p key={i} className="mb-2 text-[13.5px] leading-relaxed last:mb-0">{line}</p>;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } }}
            className="mb-4 bg-white/70 backdrop-blur-xl w-[calc(100vw-32px)] sm:w-[380px] h-[600px] max-h-[80vh] rounded-2xl shadow-2xl border border-white/20 flex flex-col overflow-hidden origin-bottom-right"
            style={{ boxShadow: '0 12px 32px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08)' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-br from-[#1a3a6e] to-[#0f2548] shrink-0 border-b border-white/10">
              <div className="relative w-10 h-10 rounded-full bg-white flex flex-shrink-0 items-center justify-center font-bold text-[#1a3a6e] shadow-md border border-white/20 overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping" />
                <img src="/logo.png" alt="BSG Logo" className="w-[95%] h-[95%] object-contain relative z-10 p-0.5 rounded-full" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-serif font-bold text-white text-[16px] tracking-wide">BizSetupGlobal</div>
                <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-white/70 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Corporate Advisory AI
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-gray-50/50" data-lenis-prevent="true">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  key={i} 
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {msg.role === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-black/5 flex-shrink-0 flex items-center justify-center transition-transform transform hover:scale-105 overflow-hidden">
                      <img src="/logo.png" alt="BSG" className="w-full h-full object-contain relative z-10 p-0.5 rounded-full" />
                    </div>
                  )}

                  <div className="flex flex-col gap-2 max-w-[85%]">
                    {msg.role === 'user' ? (
                      <div className="bg-gradient-to-br from-[#1a3a6e] to-[#0f2548] text-white rounded-2xl rounded-tr-sm px-4 py-3 text-[13.5px] font-medium leading-relaxed shadow-md">
                        {msg.text}
                      </div>
                    ) : (
                      <>
                        {msg.type === 'lead_form' ? (
                          <LeadForm onSuccess={() => {
                            setMessages(prev => [...prev, { role: 'bot', data: { answer: 'Details submitted successfully. Our corporate advisory team will contact you shortly.' } }]);
                          }} />
                        ) : (
                          <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 text-gray-800 shadow-sm overflow-hidden">
                            <div className="text-[14px] break-words whitespace-normal">
                              {formatBotText(msg.data?.answer)}
                            </div>
                            
                            {msg.data?.navigation_path && msg.data.navigation_path !== 'Direct Link' && (
                              <div className="mt-3 pt-3 border-t border-gray-100">
                                <div className="text-[11px] text-gray-500 font-medium mb-1.5">Refer to:</div>
                                <button onClick={() => handleNavigation(msg.data.url)} className="block w-full text-left break-words whitespace-normal text-[11px] font-semibold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                                  {msg.data.navigation_path} &rarr;
                                </button>
                              </div>
                            )}

                            {msg.data?.related_pages && msg.data.related_pages.length > 0 && (
                              <div className="mt-3">
                                <div className="text-[11px] text-gray-500 mb-1.5 font-medium">Related Services:</div>
                                <div className="flex flex-col gap-1.5 w-full">
                                  {msg.data.related_pages.map((p: any, idx: number) => (
                                    <button key={idx} onClick={() => handleNavigation(p.url)} className="text-left w-full break-words whitespace-normal text-[10.5px] text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1.5 rounded-lg hover:bg-gray-100 hover:text-blue-600 hover:border-blue-200 transition-colors">
                                      {p.page}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                        {msg.data?.cta && (
                          <button 
                            onClick={() => {
                              if (msg.data.cta.includes('Consultation') || msg.data.cta.includes('Started')) {
                                setMessages(prev => [...prev, { role: 'bot', type: 'lead_form' }]);
                              } else {
                                handleNavigation(msg.data.cta_url);
                              }
                            }}
                            className="self-start mt-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-[12.5px] px-4 py-2 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all w-fit flex items-center gap-1.5"
                          >
                            {msg.data.cta}
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 flex-row">
                  <div className="w-8 h-8 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-black/5 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img src="/logo.png" alt="BSG" className="w-full h-full object-contain relative z-10 p-0.5 rounded-full" />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-4 text-gray-800 shadow-sm flex items-center gap-1.5 h-[38px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.15s' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            {!isTyping && (
              <div className="px-4 pb-3 shrink-0 border-t border-gray-100 pt-3 bg-gray-50/30">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">Frequently Asked</div>
                <div className="flex overflow-x-auto gap-2 pb-2 w-full" data-lenis-prevent="true" style={{ scrollbarWidth: 'thin', scrollbarColor: '#d1d5db transparent' }}>
                  {QUICK_PROMPTS.map(p => (
                    <button 
                      key={p} 
                      onClick={() => handleSend(p)}
                      className="shrink-0 text-[11.5px] font-medium text-gray-700 bg-white border border-gray-200 px-3.5 py-1.5 rounded-full hover:bg-gray-50 hover:border-blue-200 hover:text-blue-700 hover:-translate-y-0.5 shadow-sm transition-all"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Feedback Overlay */}
            {showFeedback && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="absolute inset-0 z-50 bg-white/95 backdrop-blur flex flex-col items-center justify-center p-6 text-center"
              >
                <h4 className="font-serif font-bold text-xl text-[#1a3a6e] mb-2">Thank you!</h4>
                <p className="text-sm text-gray-600 mb-6">How was your support experience?</p>
                <div className="flex items-center gap-2 mb-6">
                  {[1,2,3,4,5].map(star => (
                    <button key={star} onClick={() => submitFeedback(star)} className="text-gray-300 hover:text-yellow-400 transition-colors focus:outline-none">
                      <Star className="w-8 h-8 fill-current" />
                    </button>
                  ))}
                </div>
                <button onClick={() => { setShowFeedback(false); setIsOpen(false); }} className="text-xs text-gray-400 hover:text-gray-600 underline">Skip for now</button>
                {givenFeedback && <div className="absolute bottom-10 font-medium text-green-600">Feedback submitted!</div>}
              </motion.div>
            )}

            {/* Input Bar */}
            <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2 shrink-0">
              <input 
                type="text"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend(inputVal)}
                placeholder="Ask about GST, company registration..."
                className="flex-1 bg-gray-50 border border-gray-200 text-[13.5px] rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all font-medium"
              />
              <button 
                onClick={() => handleSend(inputVal)}
                disabled={!inputVal.trim() || isTyping}
                className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-[#1a3a6e] to-[#0f2548] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all"
              >
                <Send className="w-5 h-5 ml-1" />
              </button>
            </div>

            <div className="text-center py-1.5 bg-gray-50 border-t border-gray-100 text-[9.5px] text-gray-400 font-medium">
              Powered by <span className="text-[#1a3a6e] font-bold tracking-wide">BizSetupGlobal AI</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 10, y: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 10, y: 10, transition: { duration: 0.2 } }}
            className="absolute bottom-[70px] right-2 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl rounded-br-sm p-3.5 border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow group w-[220px] origin-bottom-right"
            onClick={() => {
              setShowTooltip(false);
              setIsOpen(true);
            }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 shrink-0 overflow-hidden">
                <img src="/logo.png" alt="BSG" className="w-full h-full object-contain p-[1px] relative z-10 rounded-full" />
              </div>
              <div className="text-[12px] font-bold text-[#1a3a6e] leading-snug">
                Need help with your business setup? 👋
              </div>
            </div>
            
            <button 
              onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
              className="absolute -top-1 -right-1 p-1 bg-white text-gray-400 hover:text-gray-600 rounded-full shadow-sm border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#1a3a6e] to-[#0f2548] text-white flex items-center justify-center shadow-2xl z-50 border-2 border-white/10 outline-none overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 hover:bg-transparent transition-colors" />
        <AnimatePresence mode="popLayout">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="w-[45px] h-[45px] flex items-center justify-center overflow-hidden rounded-full bg-white shadow-inner">
              <img src="/logo.png" alt="Chat" className="w-full h-full object-contain relative z-10 p-0.5 rounded-full" />
            </motion.div>
          )}
        </AnimatePresence>

        {showBadge && !isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white" />
        )}
      </motion.button>
    </div>
  );
}

function LeadForm({ onSuccess }: { onSuccess: () => void }) {
  const [data, setData] = useState({ name: '', mobile: '', email: '', company: '', message: '' });
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!data.name || !data.mobile || !data.email) {
      alert("Name, Mobile and Email are required.");
      return;
    }
    setLoading(true);
    // Mimic API submission
    setTimeout(() => {
      // Store in localStorage since we are serverless!
      const leads = JSON.parse(localStorage.getItem('bsg_leads') || '[]');
      leads.push({ ...data, timestamp: new Date().toISOString() });
      localStorage.setItem('bsg_leads', JSON.stringify(leads));
      
      setLoading(false);
      onSuccess();
    }, 1000);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-4 text-gray-800 shadow-sm w-full font-medium">
      <div className="text-[13px] font-bold text-[#1a3a6e] mb-3 uppercase tracking-wide">Book A Free Consultation Call.!!</div>
      <div className="flex flex-col gap-2.5">
        <input type="text" placeholder="Enter Name" className="w-full text-sm px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-400" value={data.name} onChange={e => setData({...data, name: e.target.value})} />
        <input type="tel" placeholder="Enter Mobile No." className="w-full text-sm px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-400" value={data.mobile} onChange={e => setData({...data, mobile: e.target.value})} />
        <input type="email" placeholder="Enter Email" className="w-full text-sm px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-400" value={data.email} onChange={e => setData({...data, email: e.target.value})} />
        <input type="text" placeholder="Enter Company Name" className="w-full text-sm px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-400" value={data.company} onChange={e => setData({...data, company: e.target.value})} />
        <textarea placeholder="Message (Optional)" rows={2} className="w-full text-sm px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-400 resize-none" value={data.message} onChange={e => setData({...data, message: e.target.value})} />
        
        <button 
          onClick={submit} 
          disabled={loading}
          className="mt-1 w-full flex items-center justify-center font-bold text-white text-sm py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md hover:shadow-lg transition-all disabled:opacity-60"
        >
          {loading ? 'Submitting...' : 'Submit Details'}
        </button>
      </div>
    </div>
  );
}
