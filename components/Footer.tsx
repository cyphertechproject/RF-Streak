import React from 'react';
import { Container } from './ui/Container';
import { LOGO_URL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="https://rfwrath.com/rfstreak/RFStreak1.png" alt="Logo" className="h-10 w-auto opacity-80" />
              
            </div>
            <p className="text-slate-500 font-rajdhani text-sm max-w-sm">
             RF Online server with an active community, stable gameplay, and nonstop action, this is where legends are made.
            🔥 Choose your race. Build your streak. Dominate the war. 🔥Join RF Streak now!
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-orbitron text-white uppercase font-bold mb-4">Game Info</h4>
            <ul className="space-y-2 font-rajdhani text-slate-400">
              <li><a href="https://www.facebook.com/rfstreak" target="_blank" className="hover:text-streak-500 transition-colors">Server Features</a></li>
              <li><a href="https://www.facebook.com/rfstreak" target="_blank" className="hover:text-streak-500 transition-colors">Drop List</a></li>
              <li><a href="https://www.facebook.com/rfstreak" target="_blank" className="hover:text-streak-500 transition-colors">Rules & Policy</a></li>
              <li><a href="https://www.facebook.com/rfstreak" target="_blank" className="hover:text-streak-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron text-white uppercase font-bold mb-4">Account</h4>
            <ul className="space-y-2 font-rajdhani text-slate-400">
              <li><a href="https://www.facebook.com/rfstreak" target="_blank" className="hover:text-streak-500 transition-colors">Register</a></li>
              <li><a href="https://www.facebook.com/rfstreak" target="_blank" className="hover:text-streak-500 transition-colors">Login</a></li>
              <li><a href="https://www.facebook.com/rfstreak" target="_blank" className="hover:text-streak-500 transition-colors">Forgot Password</a></li>
              <li><a href="https://www.facebook.com/rfstreak" target="_blank" className="hover:text-streak-500 transition-colors">Support Ticket</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs font-rajdhani">
            © 2026 RF Streak. All Rights Reserved. Streak Play Development.
          </p>
          <div className="flex gap-4">
             {/* Simple visual placeholders for payment methods often seen on these sites */}
             <div className="h-6 w-10 bg-white/10 rounded"></div>
             <div className="h-6 w-10 bg-white/10 rounded"></div>
             <div className="h-6 w-10 bg-white/10 rounded"></div>
          </div>
        </div>
      </Container>
    </footer>
  );
};