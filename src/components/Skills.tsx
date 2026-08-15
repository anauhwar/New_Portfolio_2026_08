import Section from './Section';
import { careerData } from '../data';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export default function Skills() {
  return (
    <Section id="skills" title="Technical Expertise">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {careerData.skills.map((category, idx) => {
          // @ts-ignore
          const Icon = Icons[category.icon] || Icons.Code;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-teal-400">
                  <Icon size={20} />
                </div>
                <h3 className="text-white font-bold text-sm">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <motion.span 
                    key={sIdx}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(20, 184, 166, 0.1)', color: '#2dd4bf', borderColor: 'rgba(45, 212, 191, 0.5)' }}
                    className="px-2 py-1 bg-slate-800/50 text-slate-400 text-[10px] rounded border border-slate-700/50 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-12 bg-slate-900/40 border border-slate-800 rounded-2xl p-6"
      >
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
          Certifications
        </h3>
        <div className="flex flex-wrap gap-3">
          {careerData.certifications.map((cert, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-center gap-2 px-3 py-2 bg-slate-800/30 rounded-lg border border-slate-700/50 cursor-default"
            >
              <Icons.CheckCircle2 className="text-amber-500" size={14} />
              <span className="text-slate-300 text-[11px] font-medium">{cert}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
