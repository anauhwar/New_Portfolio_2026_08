import { motion } from 'motion/react';
import { careerData } from '../data';
import ThreeCanvas from './ThreeCanvas';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      <ThreeCanvas />
      
      <div className="z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">Cloud & Data Specialist</div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-4">
              {careerData.name} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">{careerData.title}</span>
            </h1>
          </div>
          
          <p className="text-sm md:text-base text-slate-400 max-w-lg leading-relaxed relative z-10">
            {careerData.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4 relative z-10">
            <a href="#projects" className="px-6 py-3 bg-teal-500 text-teal-950 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/20">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-3 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-slate-800 transition-colors">
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-72 h-72 rounded-full overflow-hidden border border-slate-800 shadow-2xl shadow-teal-500/20 p-2 bg-slate-900/50">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src={imgError ? `https://ui-avatars.com/api/?name=${encodeURIComponent(careerData.name)}&background=0D9488&color=fff&size=512` : '/avatar.png'} 
                alt={careerData.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            <div className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-full -z-10"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-slate-400 hover:text-teal-400 transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
