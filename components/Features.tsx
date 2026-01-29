import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-scifi-dark relative overflow-hidden">
      {/* Background Tech Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[20%] left-0 w-full h-px bg-neon-500"></div>
        <div className="absolute top-[80%] left-0 w-full h-px bg-neon-500"></div>
        <div className="absolute top-0 left-[20%] w-px h-full bg-streak-500"></div>
        <div className="absolute top-0 right-[20%] w-px h-full bg-streak-500"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="mb-16 text-center">
            <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white uppercase leading-tight">
              Why <span className="text-streak-500">RF Streak?</span>
            </h2>
            <p className="text-slate-400 font-rajdhani text-lg mt-4 max-w-2xl mx-auto">
              Experience the next evolution of PvP MMORPG gameplay with modern enhancements.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Feature - Spans 2 rows on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-to-br from-scifi-panel to-black border border-white/10 rounded-lg p-8 relative overflow-hidden group min-h-[300px] flex flex-col justify-end"
          >
             <div className="absolute inset-0 bg-[url('https://wallpaperaccess.com/full/3308117.jpg')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
             
             <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-streak-500 text-black font-bold font-orbitron text-xs rounded mb-4">CORE FEATURE</div>
                <h3 className="font-orbitron font-bold text-3xl text-white mb-2">Massive Chip Wars</h3>
                <p className="font-rajdhani text-slate-300 text-lg max-w-lg">
                  Engage in large-scale race wars three times a day. Fight for the Crag Mine and secure resources for your race with improved balance and rewards.
                </p>
             </div>
          </motion.div>

          {/* Grid of smaller features */}
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-scifi-panel/50 border border-white/5 backdrop-blur-sm p-6 rounded-lg hover:border-neon-500/50 hover:bg-scifi-panel transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Icon size={100} className="text-white" />
                </div>
                
                <div className="w-12 h-12 bg-neon-900/20 border border-neon-500/30 rounded flex items-center justify-center mb-4 group-hover:bg-neon-500/20 transition-colors">
                   <Icon className="text-neon-400" size={24} />
                </div>
                
                <h3 className="font-orbitron font-bold text-xl text-white mb-2">{feature.title}</h3>
                <p className="font-rajdhani text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  );
};