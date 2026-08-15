import Section from './Section';
import { careerData } from '../data';
import { motion } from 'motion/react';
import { Activity } from 'lucide-react';

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {careerData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors group flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
            
            <div className="flex justify-between items-start mb-4 z-10">
              <div>
                <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{project.role} &bull; {project.duration}</p>
              </div>
            </div>
            
            <p className="text-[13px] text-slate-400 mb-6 flex-grow leading-relaxed z-10">
              {project.description}
            </p>
            
            <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50 mb-6 z-10">
              <div className="flex items-start gap-3">
                <Activity className="text-amber-500 shrink-0 mt-0.5" size={16} />
                <p className="text-slate-300 text-xs leading-relaxed font-medium">{project.impact}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto z-10">
              {project.technologies.map((tech, techIdx) => (
                <span key={techIdx} className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-[9px] border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
