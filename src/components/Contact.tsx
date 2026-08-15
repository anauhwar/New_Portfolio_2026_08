import Section from './Section';
import { careerData } from '../data';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch" className="pb-32">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-teal-600 to-teal-900 rounded-2xl p-10 text-white flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-teal-500/10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-400/20 via-transparent to-transparent"></div>
        
        <div className="relative z-10">
          <h3 className="text-xs font-bold opacity-70 uppercase tracking-widest mb-4">Let's Connect</h3>
          <p className="text-sm md:text-base font-light mb-8 max-w-lg mx-auto text-teal-50">
            Currently exploring Senior/Lead opportunities globally. Whether you have a question, a role to discuss, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex justify-center mb-10">
            <a 
              href={`mailto:${careerData.email}`} 
              className="px-8 py-3 bg-white text-teal-900 font-bold rounded-lg text-xs uppercase tracking-widest hover:bg-teal-50 transition-colors shadow-lg"
            >
              Send Message
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-xs">
            <a href={`mailto:${careerData.email}`} className="flex items-center gap-2 text-teal-100 hover:text-white transition-colors">
              <Mail size={16} />
              <span>{careerData.email}</span>
            </a>
            <a href={careerData.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-teal-100 hover:text-white transition-colors">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a href={careerData.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-teal-100 hover:text-white transition-colors">
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
