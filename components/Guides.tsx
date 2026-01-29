import React from 'react';
import { ArrowRight, Book, Sword, Shield, Zap } from 'lucide-react';
import { Container } from './ui/Container';
import { SciFiButton } from './ui/SciFiButton';
import { GUIDES } from '../constants';

export const Guides: React.FC = () => {
  return (
    <section id="guides" className="py-24 bg-scifi-panel relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="font-orbitron font-black text-3xl md:text-5xl text-white uppercase mb-2">
              Combat <span className="text-neon-500">Manuals</span>
            </h2>
            <p className="text-slate-400 font-rajdhani text-lg">Master the mechanics and dominate your enemies.</p>
          </div>
          <SciFiButton 
            variant="outline" 
            size="sm" 
            icon={<Book size={16} />}
            href="https://www.facebook.com/rfstreak"
            target="_blank"
          >
            View Knowledge Base
          </SciFiButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUIDES.map((guide, index) => (
            <div 
              key={index} 
              className="group relative bg-black/40 border border-white/10 overflow-hidden hover:border-neon-500/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                <img 
                  src={guide.image} 
                  alt={guide.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                
                {/* Category Badge */}
                <div className="absolute top-2 right-2 z-20">
                   <span className="px-2 py-1 bg-streak-500 text-black text-xs font-bold font-orbitron rounded">{guide.category}</span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col relative z-10">
                <h3 className="font-orbitron font-bold text-lg text-white mb-2 group-hover:text-neon-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 font-rajdhani leading-relaxed flex-grow">
                  {guide.description}
                </p>
                <a href="https://www.facebook.com/rfstreak" target="_blank" className="inline-flex items-center text-slate-300 text-sm font-bold uppercase hover:text-neon-400 hover:gap-3 transition-all">
                  Read Guide <ArrowRight size={14} className="ml-2 text-streak-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};