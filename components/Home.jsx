
import React from 'react';
import { AppSection } from '../types';

const Home = ({ onNavigate }) => {
  const whatsappNumber = "6285333049716";
  const hireMessage = encodeURIComponent("Halo Putu, saya tertarik untuk merekrut/bekerja sama dengan Anda untuk proyek saya.");

  return (
    <div className="relative flex flex-1 flex-col hero-gradient min-h-screen animate-in fade-in duration-700 overflow-hidden">
      <nav className="sticky top-0 z-50 flex items-center bg-background-dark/80 backdrop-blur-xl p-4 justify-between border-b border-white/5">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavigate(AppSection.HOME)}>
          <div className="text-primary flex size-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all">
            <span className="material-symbols-outlined !text-xl">code_blocks</span>
          </div>
          <h2 className="text-base font-black leading-tight tracking-widest text-white uppercase">Putu<span className="text-primary">.</span>Sugianta</h2>
        </div>
        <button 
          onClick={() => onNavigate(AppSection.ABOUT)}
          className="flex items-center justify-center rounded-xl h-10 w-10 text-white hover:bg-white/5 transition-colors active:scale-90"
        >
          <span className="material-symbols-outlined">grid_view</span>
        </button>
      </nav>

      <main className="relative flex flex-1 flex-col justify-center px-8 pt-12 pb-24 max-w-md mx-auto w-full">
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40"></div>
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="relative z-10 w-full flex flex-col items-center text-center">
          <div 
            className="size-24 rounded-[32px] bg-slate-800 bg-cover bg-center border-2 border-primary/30 shadow-2xl shadow-primary/10 mb-8" 
            style={{ backgroundImage: 'url("/sugik.jpeg")' }}
          ></div>

          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-[10px] font-black tracking-[0.3em] uppercase">Sistem Informasi Primakara</span>
          </div>
          
          <h1 className="text-white tracking-tighter text-5xl font-black leading-[1.0] mb-4">
            Mobile & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Web</span> Specialist.
          </h1>
          
          <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6 max-w-[280px]">
            Mobile Programmer, Web Developer, dan Business Planner .
          </p>

          {/* Social Icons Row */}
          <div className="flex gap-4 mb-10">
            <a href="https://github.com/putusugianta" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all active:scale-90">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://instagram.com/sugikne_" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:border-pink-500/30 hover:bg-pink-500/5 transition-all active:scale-90">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://linkedin.com/in/putu-sugianta" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all active:scale-90">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <button 
              onClick={() => onNavigate(AppSection.PORTFOLIO)}
              className="flex items-center justify-center gap-3 rounded-2xl h-16 bg-primary text-white text-base font-black shadow-[0_10px_30px_rgba(59,130,246,0.4)] active:scale-[0.96] transition-all"
            >
              <span>Lihat Project Saya</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${hireMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl h-16 bg-[#25D366] text-white text-base font-black shadow-[0_10px_30px_rgba(37,211,102,0.2)] active:scale-[0.96] transition-all hover:bg-[#20ba5a]"
            >
              <span>Hire Me / Chat</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.779-.879-2.053-.979-.275-.101-.476-.151-.677.15-.201.301-.778 1.002-.953 1.177-.175.176-.351.201-.651.051-.3-.15-1.265-.467-2.41-1.487-.893-.797-1.495-1.782-1.671-2.083-.176-.301-.019-.464.131-.614.135-.135.301-.351.451-.526.15-.176.201-.301.301-.502.101-.201.051-.376-.025-.526-.076-.151-.677-1.629-.926-2.231-.242-.588-.487-.509-.67-.519l-.571-.01c-.197 0-.518.074-.789.374-.271.3-.1.725-.1.725s.041.085.068.145c.356.792 1.446 2.301 1.52 2.405.074.104 2.192 3.348 5.312 4.698.742.321 1.321.513 1.769.654.745.237 1.423.204 1.958.125.597-.089 1.779-.727 2.029-1.429.25-.702.25-1.303.175-1.429-.075-.126-.276-.201-.576-.351z"/></svg>
            </a>
          </div>
        </div>
      </main>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-bold text-slate-600 tracking-widest uppercase">Scroll Explore</span>
        <div className="w-[2px] h-8 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </div>
  );
};

export default Home;
