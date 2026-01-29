import React from 'react';
import { MessageCircle, Facebook } from 'lucide-react';
import { Container } from './ui/Container';
import { SciFiButton } from './ui/SciFiButton';

export const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 relative overflow-hidden">
       {/* Background Image Parallax effect simulated with fixed bg */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale opacity-20"
            alt="Community Background"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-scifi-dark via-scifi-dark/80 to-transparent"></div>
      </div>

      <Container className="relative z-10">
        <div className="bg-gradient-to-r from-streak-900/40 to-black/60 border border-streak-500/30 rounded-2xl p-8 md:p-16 backdrop-blur-sm text-center">
          
          <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-6 uppercase">
            Join the <span className="text-streak-500">Streak</span> Community
          </h2>
          
          <p className="font-rajdhani text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Connect with thousands of players, trade items, find a guild, and get the latest updates directly from the administration.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <SciFiButton 
              className="bg-[#5865F2] hover:bg-[#4752C4] border-transparent text-white w-full sm:w-auto"
              icon={<MessageCircle />}
            >
              Join Discord Server
            </SciFiButton>
            
            <SciFiButton 
              className="bg-[#1877F2] hover:bg-[#166fe5] border-transparent text-white w-full sm:w-auto"
              icon={<Facebook />}
            >
              Follow Facebook
            </SciFiButton>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-white/10 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5,000+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Discord Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1,200+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Online Players</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">150+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Active Guilds</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest">Support</div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
