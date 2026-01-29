
import React from 'react';
import { AppSection } from '../types';

const Contact = ({ onNavigate }) => {
  const whatsappNumber = "6285333049716";
  const defaultMessage = encodeURIComponent("Halo Putu, saya melihat portfolio Anda dan tertarik untuk berkolaborasi.");

  return (
    <div className="bg-background-dark text-white min-h-screen flex flex-col animate-in slide-in-from-bottom-4 duration-300">
      <header className="p-4 flex items-center border-b border-slate-800">
        <button onClick={() => onNavigate(AppSection.HOME)} className="text-primary mr-4">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold uppercase">Hubungi Saya</h2>
      </header>

      <main className="flex-1 p-6 max-w-md mx-auto w-full pb-32">
        <div className="space-y-6">
          <a href={`tel:+${whatsappNumber}`} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 active:bg-white/10 transition-colors">
            <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Telepon</p>
              <p className="text-base font-semibold">+62 8533 3049 716</p>
            </div>
          </a>

          <a href="mailto:putusugianta2005@gmail.com" className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 active:bg-white/10 transition-colors">
            <div className="size-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Email</p>
              <p className="text-base font-semibold">putusugianta2005@gmail.com</p>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
            <div className="size-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Alamat</p>
              <p className="text-sm font-semibold">Br. Adegan, Ped, Kec. Nusa Penida, Bali</p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-10">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-4 px-2">Media Sosial</h3>
            <div className="grid grid-cols-3 gap-4">
                <a href="https://instagram.com/sugikkne" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 bg-white/5 p-4 rounded-2xl border border-white/10 active:bg-pink-500/10 transition-colors group">
                    <svg className="w-6 h-6 fill-slate-400 group-hover:fill-pink-500 transition-colors" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Insta</span>
                </a>
                <a href="https://www.linkedin.com/in/putu-sugianta-a079b1353/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 bg-white/5 p-4 rounded-2xl border border-white/10 active:bg-blue-500/10 transition-colors group">
                    <svg className="w-6 h-6 fill-slate-400 group-hover:fill-blue-500 transition-colors" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">In</span>
                </a>
                <a href="https://github.com/sugikne" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 bg-white/5 p-4 rounded-2xl border border-white/10 active:bg-slate-300/10 transition-colors group">
                    <svg className="w-6 h-6 fill-slate-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Git</span>
                </a>
            </div>
        </div>

        <div className="mt-12 text-center">
            <h3 className="text-white font-bold mb-4">Mari berkolaborasi!</h3>
            <p className="text-slate-400 text-sm mb-8">Terbuka untuk peluang proyek freelance maupun kerja sama tim.</p>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-10 py-4 rounded-2xl shadow-lg shadow-green-500/20 active:scale-95 transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.779-.879-2.053-.979-.275-.101-.476-.151-.677.15-.201.301-.778 1.002-.953 1.177-.175.176-.351.201-.651.051-.3-.15-1.265-.467-2.41-1.487-.893-.797-1.495-1.782-1.671-2.083-.176-.301-.019-.464.131-.614.135-.135.301-.351.451-.526.15-.176.201-.301.301-.502.101-.201.051-.376-.025-.526-.076-.151-.677-1.629-.926-2.231-.242-.588-.487-.509-.67-.519l-.571-.01c-.197 0-.518.074-.789.374-.271.3-.1.725-.1.725s.041.085.068.145c.356.792 1.446 2.301 1.52 2.405.074.104 2.192 3.348 5.312 4.698.742.321 1.321.513 1.769.654.745.237 1.423.204 1.958.125.597-.089 1.779-.727 2.029-1.429.25-.702.25-1.303.175-1.429-.075-.126-.276-.201-.576-.351z"/></svg>
              <span>WhatsApp Me</span>
            </a>
        </div>
      </main>
    </div>
  );
};

export default Contact;
