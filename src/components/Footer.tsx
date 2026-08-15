import { careerData } from '../data';

export default function Footer() {
  return (
    <footer className="px-6 py-6 md:px-12 flex flex-col md:flex-row items-center justify-between border-t border-slate-800 text-[10px] text-slate-500 uppercase tracking-[0.2em] relative z-10 max-w-7xl mx-auto w-full gap-4">
      <span>Design System v2.0 // Terminal Access Verified</span>
      <span>&copy; {new Date().getFullYear()} {careerData.name} &mdash; Data Privacy Encrypted</span>
    </footer>
  );
}
