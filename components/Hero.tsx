import React from 'react';
import { motion } from 'framer-motion';
import { Download, Gamepad2, ChevronDown } from 'lucide-react';
import { SciFiButton } from './ui/SciFiButton';
import { Container } from './ui/Container';
import { LOGO_URL } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-scifi-dark/80 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.15)_0%,_rgba(0,0,0,0.8)_80%)] z-10"></div>
        
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
          alt="Battlefield" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        
        {/* Animated Grid Floor */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(6,182,212,0.1))] perspective-[1000px] transform-gpu">
           <div className="w-full h-full bg-[size:40px_40px] bg-grid-pattern opacity-20 transform rotate-x-60 origin-bottom"></div>
        </div>
      </div>

      <Container className="relative z-20 pt-20">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 relative group"
          >
             <div className="absolute -inset-10 bg-streak-500/20 blur-[60px] rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-1000"></div>
             
             {/* Logo Fallback/Display */}
             {LOGO_URL ? (
                <img src={LOGO_URL} alt="RF Streak" className="w-64 md:w-96 h-auto relative z-10 drop-shadow-[0_0_25px_rgba(6,182,212,0.8)]" />
             ) : (
                // CSS Logo Construction if image fails
                <h1 className="font-orbitron font-black text-6xl md:text-8xl tracking-tighter italic relative z-10 transform -skew-x-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" style={{ WebkitTextStroke: '1px rgba(34,211,238,0.5)' }}>RF</span>
                  <span className="text-streak-400 mx-1 drop-shadow-[0_0_15px_rgba(234,179,8,1)] text-7xl md:text-9xl relative -top-2">⚡</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-100 via-slate-300 to-slate-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">STREAK</span>
                </h1>
             )}
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-orbitron font-bold text-2xl md:text-4xl text-white uppercase tracking-[0.2em] mb-8 text-glow-cyan">
              Dominate the <span className="text-streak-500 inline-block animate-pulse">Battlefield</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10 font-rajdhani font-bold text-lg md:text-xl text-slate-300">
              <div className="flex items-center gap-2 px-4 py-2 bg-scifi-panel/50 border border-neon-500/30 rounded skew-x-[-10deg]">
                 <span className="text-neon-400 skew-x-[10deg]">LEVEL 65 CAP</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-scifi-panel/50 border border-streak-500/30 rounded skew-x-[-10deg]">
                 <span className="text-streak-400 skew-x-[10deg]">MID RATE</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-scifi-panel/50 border border-neon-500/30 rounded skew-x-[-10deg]">
                 <span className="text-neon-400 skew-x-[10deg]">BALANCED PVP</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative z-20"
          >
            <SciFiButton variant="primary" size="lg" icon={<Download />} className="w-full sm:w-auto shadow-[0_0_30px_rgba(234,179,8,0.3)]">
              Download Client
            </SciFiButton>
            <SciFiButton variant="neon" size="lg" icon={<Gamepad2 />} className="w-full sm:w-auto shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              Create Account
            </SciFiButton>
          </motion.div>

          {/* Server Status with Detail */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 relative group cursor-default"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-500 to-streak-500 rounded-lg opacity-20 group-hover:opacity-40 blur transition-opacity"></div>
            <div className="relative flex items-center gap-6 bg-scifi-dark/90 border border-white/10 px-8 py-3 rounded-lg backdrop-blur-md">
              <div className="flex flex-col items-start">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Server Status</span>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-green-400 font-orbitron font-bold tracking-wider">ONLINE</span>
                </div>
              </div>
              
              <div className="w-px h-8 bg-white/10"></div>

              <div className="flex flex-col items-start">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Ping</span>
                <span className="text-neon-300 font-mono font-bold">24ms</span>
              </div>
              
              <div className="w-px h-8 bg-white/10"></div>

              <div className="flex flex-col items-start">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Players</span>
                <span className="text-streak-400 font-mono font-bold">1,240</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
          >
            <ChevronDown size={32} />
          </motion.div>

        </div>
      </Container>
    </section>
  );
};