
import React from 'react';
import { AppSection } from '../types';

const About = ({ onNavigate }) => {
  const whatsappNumber = "6285333049716";
  const hireMessage = encodeURIComponent("Halo Putu, saya baru saja membaca profil Anda dan tertarik untuk hire/bekerja sama.");

  return (
    <div className="bg-background-dark text-slate-200 min-h-screen pb-32 animate-in fade-in duration-500">
      <div className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-slate-800">
        <div className="flex items-center justify-between px-4 h-16 max-w-md mx-auto">
          <button onClick={() => onNavigate(AppSection.HOME)} className="w-10 flex items-center justify-start active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-primary">arrow_back_ios</span>
          </button>
          <h1 className="text-sm font-bold tracking-widest text-white uppercase">Identity</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <main className="max-w-md mx-auto px-6">
        <section className="pt-10 pb-8 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="size-36 rounded-3xl p-1 bg-gradient-to-tr from-primary to-blue-400 rotate-3 shadow-2xl shadow-primary/20">
              <div 
                className="w-full h-full rounded-[20px] bg-slate-800 bg-cover bg-center border-2 border-background-dark -rotate-3" 
                style={{ backgroundImage: 'url("/sugik.jpeg")' }}
              ></div>
            </div>
            <div className="absolute -bottom-2 -right-2 size-10 bg-primary border-4 border-background-dark rounded-full flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-[18px] font-bold">check_badge</span>
            </div>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">Putu Sugianta</h2>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20 uppercase tracking-tighter">Mobile Programmer</span>
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-tighter">Web Developer</span>
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-tighter">Business Planner</span>
          </div>
          <p className="flex items-center justify-center gap-1 mt-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            Nusa Penida, Bali
          </p>

          <a 
            href={`https://wa.me/${whatsappNumber}?text=${hireMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center gap-2 px-6 py-3 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-2xl shadow-lg shadow-primary/20 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-sm">rocket_launch</span>
            Hire Me Now
          </a>
        </section>

        <section className="space-y-6">
          <div className="bg-card-dark border border-slate-700/50 p-6 rounded-3xl">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">person_search</span>
              Summary
            </h3>
            <p className="text-slate-300 leading-relaxed text-[14px]">
              Mahasiswa Sistem Informasi di Primakara University. Berpengalaman sebagai UI/UX Designer, Mobile Programmer (Flutter), dan memiliki latar belakang kuat di bidang akuntansi serta perencanaan bisnis. Senang membangun solusi yang efisien dan estetik.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card-dark border border-slate-700/50 p-5 rounded-3xl">
              <span className="material-symbols-outlined text-primary mb-3">account_balance</span>
              <h4 className="text-white font-bold text-sm mb-1">Accounting</h4>
              <p className="text-slate-500 text-[11px]">Financial tracking & business viability.</p>
            </div>
            <div className="bg-card-dark border border-slate-700/50 p-5 rounded-3xl">
              <span className="material-symbols-outlined text-blue-400">devices</span>
              <h4 className="text-white font-bold text-sm mb-1">Multiplatform</h4>
              <p className="text-slate-500 text-[11px]">Web & Mobile development expert.</p>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">analytics</span>
              Technical Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Flutter', 'Dart', 'React', 'HTML', 'Javascript', 'CSS', 'MySQL', 'Supabase', 'Figma', 'Excel (Accounting)'].map(s => (
                <span key={s} className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 rounded-xl text-[11px] font-bold">{s}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
