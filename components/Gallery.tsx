import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';

export const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="py-24 bg-black relative">
       <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-scifi-dark to-transparent z-10"></div>
       
       <Container>
         <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-orbitron font-black text-3xl md:text-5xl text-white uppercase">
                War <span className="text-stroke-1 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500" style={{ WebkitTextStroke: '1px white' }}>Archive</span>
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
               className={`relative group overflow-hidden rounded-lg border border-white/10 cursor-pointer ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
             >
                <div className="absolute inset-0 bg-streak-500/0 group-hover:bg-streak-500/20 z-10 transition-colors duration-300"></div>
                <img src={src} alt="Gallery" className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                   <p className="font-orbitron text-white text-sm">SCREENSHOT_00{idx+1}.PNG</p>
                </div>
             </motion.div>
           ))}
         </div>
       </Container>
    </section>
  );
};