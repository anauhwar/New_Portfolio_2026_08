import Section from './Section';
import { careerData } from '../data';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-slate-400 text-sm leading-relaxed">
        <div className="lg:col-span-2 space-y-4 bg-slate-900/40 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="relative z-10 space-y-4">
            {careerData.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <p>
              I believe technology should solve business problems while remaining scalable, secure, observable, and maintainable. My engineering philosophy emphasizes architecture before implementation, performance by design, reusable engineering practices, and continuous improvement.
            </p>
          </div>
        </div>
        
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 flex flex-col relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 relative z-10">
            Core Focus Areas
          </h3>
          <ul className="space-y-4 relative z-10">
            {[
              "Solution Architecture",
              "Enterprise Data Engineering",
              "Observability & Monitoring",
              "FinOps & Cloud Cost Analytics",
              "Performance Optimization"
            ].map((focus, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                <span className="text-white font-medium text-sm">{focus}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
