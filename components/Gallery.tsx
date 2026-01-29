import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Container } from './ui/Container';

export const Gallery: React.FC = () => {
  const images = [
    "https://rfwrath.com/rfstreak/streakbanner.png",
    "https://rfwrath.com/rfstreak/streak1.jpg",
    "https://rfwrath.com/rfstreak/streak2.jpg",
"https://rfwrath.com/rfstreak/streak3.jpg",
"https://rfwrath.com/rfstreak/streak4.jpg"
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const close = useCallback(() => setSelectedIndex(null), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, close, showPrev, showNext]);

  return (
    <section id="gallery" className="py-24 bg-black relative">
       <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-scifi-dark to-transparent z-10"></div>
       
       <Container>
         <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-orbitron font-black text-3xl md:text-5xl text-white uppercase">
                Streak <span className="text-stroke-1 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500" style={{ WebkitTextStroke: '1px white' }}>Archive</span>
              </h2>
            </div>
            <div className="hidden md:block h-px w-1/3 bg-white/20"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[400px]">
           {images.map((src, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               onClick={() => setSelectedIndex(idx)}
               className={`relative group overflow-hidden rounded-lg border border-white/10 cursor-pointer ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
             >
                <div className="absolute inset-0 bg-streak-500/0 group-hover:bg-streak-500/20 z-10 transition-colors duration-300"></div>
                <img src={src} alt="Gallery" className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                
                {/* Zoom Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-black/50 p-3 rounded-full border border-white/20 backdrop-blur-sm">
                    <ZoomIn className="text-white w-6 h-6" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                   <p className="font-orbitron text-white text-sm">SCREENSHOT_00{idx+1}.PNG</p>
                </div>
             </motion.div>
           ))}
         </div>
       </Container>

       {/* Lightbox Modal */}
       <AnimatePresence>
         {selectedIndex !== null && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
             onClick={close}
           >
             <button 
               onClick={close}
               className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-50 p-2"
             >
               <X size={32} />
             </button>

             <button
                onClick={showPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-streak-500 transition-colors z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full border border-white/5 hover:border-streak-500/50"
             >
               <ChevronLeft size={40} />
             </button>

             <button
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-streak-500 transition-colors z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full border border-white/5 hover:border-streak-500/50"
             >
               <ChevronRight size={40} />
             </button>

             <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
             >
               <img 
                 src={images[selectedIndex]} 
                 alt={`Screenshot ${selectedIndex + 1}`}
                 className="max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
               />
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur px-4 py-2 rounded-full border border-white/10 text-white font-orbitron text-sm">
                 {selectedIndex + 1} / {images.length}
               </div>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
    </section>
  );
};