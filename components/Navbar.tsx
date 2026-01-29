import React, { useState, useEffect } from 'react';
import { Menu, X, Download, User } from 'lucide-react';
import { Container } from './ui/Container';
import { SciFiButton } from './ui/SciFiButton';
import { LOGO_URL } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Server Info', href: '#info' },
    { name: 'Features', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-scifi-dark/80 backdrop-blur-xl py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center gap-2">
            {LOGO_URL ? (
              <img src={LOGO_URL} alt="RF Streak" className="h-8 md:h-10 w-auto" />
            ) : (
              <div className="font-orbitron font-black text-2xl md:text-3xl italic tracking-tighter flex items-center transform -skew-x-6">
                <img src="https://rfwrath.com/rfstreak/RFStreak1.png" alt="RF Streak" className="h-8 md:h-10 w-auto" />
              </div>
            )}
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="font-rajdhani font-bold text-sm text-slate-300 hover:text-white transition-colors uppercase tracking-widest relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-500 to-streak-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 pl-6 border-l border-white/10">
              <SciFiButton 
                variant="primary" 
                size="sm" 
                icon={<Download size={14} />} 
                href="https://www.facebook.com/rfstreak" 
                target="_blank"
              >
                Download
              </SciFiButton>
              <SciFiButton 
                variant="secondary" 
                size="sm" 
                icon={<User size={14} />} 
                href="https://www.facebook.com/rfstreak" 
                target="_blank"
              >
                GameCP
              </SciFiButton>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-streak-500 transition-colors">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-scifi-dark/95 backdrop-blur-xl border-b border-streak-500/30 py-6 shadow-2xl">
            <Container>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-orbitron text-xl text-center text-slate-200 hover:text-streak-500 py-2 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col gap-4 mt-4">
                  <SciFiButton 
                    variant="primary" 
                    className="w-full" 
                    href="https://www.facebook.com/rfstreak" 
                    target="_blank"
                  >
                    Download Client
                  </SciFiButton>
                  <SciFiButton 
                    variant="secondary" 
                    className="w-full" 
                    href="https://www.facebook.com/rfstreak" 
                    target="_blank"
                  >
                    Register / Login
                  </SciFiButton>
                </div>
              </div>
            </Container>
          </div>
        )}
      </Container>
    </nav>
  );
};