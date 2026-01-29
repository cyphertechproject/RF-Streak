import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface SciFiButtonProps extends Omit<HTMLMotionProps<"button"> & HTMLMotionProps<"a">, "children"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  target?: string;
}

export const SciFiButton: React.FC<SciFiButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon,
  className = '',
  href,
  ...props 
}) => {
  
  const baseStyles = "relative font-orbitron font-bold uppercase tracking-wider transition-all duration-200 clip-corner-br flex items-center justify-center gap-2 group overflow-hidden cursor-pointer no-underline text-center";
  
  const variants = {
    // Gold/Yellow Theme (Lightning) - Solid
    primary: "bg-gradient-to-r from-streak-600 to-streak-500 text-black hover:from-streak-500 hover:to-streak-400 border border-streak-400 shadow-[0_0_15px_rgba(234,179,8,0.4)]",
    
    // Cyan/Blue Theme (Futuristic) - Solid
    neon: "bg-gradient-to-r from-neon-600 to-neon-500 text-black hover:from-neon-500 hover:to-neon-400 border border-neon-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]",
    
    // Dark Panel with Cyan Border - Ghost
    secondary: "bg-scifi-panel/80 backdrop-blur text-neon-400 border border-neon-500/50 hover:border-neon-400 hover:bg-neon-500/10 hover:text-neon-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]",
    
    // Outline - Minimal
    outline: "bg-transparent text-scifi-muted border border-scifi-border hover:border-scifi-text hover:bg-white/5 hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base sm:text-lg"
  };

  const Component = href ? motion.a : motion.button;

  return (
    // @ts-ignore
    <Component 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      href={href}
      {...props}
    >
      {/* Scanline overlay for button */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[pulse_2s_infinite]"></div>
      
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50 opacity-50 group-hover:opacity-100"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50 opacity-50 group-hover:opacity-100"></span>

      {icon && <span className="w-5 h-5 relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </Component>
  );
};