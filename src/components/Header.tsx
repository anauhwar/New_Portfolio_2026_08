import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { careerData } from '../data';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-teal-400 to-amber-500 flex items-center justify-center font-bold text-slate-900">
            AN
          </div>
          <span className="text-white font-semibold tracking-tight uppercase text-sm">Akash Nauhwar</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-[11px] uppercase tracking-[0.2em] font-medium text-slate-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-teal-400 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" className="hover:text-teal-400 transition-colors">
            Resume
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 p-6 flex flex-col gap-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-slate-300 hover:text-teal-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="text-[11px] uppercase tracking-[0.2em] font-medium text-slate-300 hover:text-teal-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Resume
          </a>
        </motion.div>
      )}
    </header>
  );
}
