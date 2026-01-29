import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { SERVER_RATES } from '../constants';

export const ServerRates: React.FC = () => {
  return (
    <section id="info" className="py-24 bg-scifi-dark relative border-t border-scifi-border">
      <div className="absolute inset-0 bg-hex-pattern opacity-5"></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center mb-16">
          <span className="text-neon-500 font-rajdhani font-bold tracking-[0.3em] text-sm mb-2">SERVER SPECIFICATIONS</span>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white uppercase mb-4 text-glow-cyan">
            Battle <span className="text-transparent bg-clip-text bg-gradient-to-r from-streak-400 to-streak-600">Parameters</span>
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-neon-500 to-transparent"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SERVER_RATES.map((rate, index) => {
            const Icon = rate.icon;
            return (
              <motion.div 
                key={rate.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-scifi-panel border border-scifi-border/50 p-6 flex flex-col items-center justify-center min-h-[180px] clip-corner-br hover:bg-white/5 transition-all duration-300"
              >
                {/* Decorative Borders */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-streak-500/50 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-scifi-border group-hover:border-streak-500 transition-colors"></div>
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-scifi-border group-hover:border-neon-500 transition-colors"></div>

                <div className="relative mb-4">
                   <div className="absolute inset-0 bg-neon-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <Icon className={`w-8 h-8 ${rate.color} relative z-10`} />
                </div>
                
                <h3 className="text-3xl font-black font-orbitron text-white mb-1 group-hover:text-streak-400 transition-colors tracking-tighter">
                  {rate.value}
                </h3>
                <p className="text-xs font-rajdhani font-bold text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">
                  {rate.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};