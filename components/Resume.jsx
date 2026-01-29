
import React from 'react';
import { AppSection } from '../types';

const Resume = ({ onNavigate }) => {
  return (
    <div className="bg-background-dark text-slate-100 min-h-screen pb-32 animate-in slide-in-from-right duration-300">
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-slate-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <h2 className="text-white text-lg font-bold tracking-tight uppercase">Resume</h2>
          <button 
            onClick={() => window.print()}
            className="flex size-10 items-center justify-center rounded-lg bg-primary text-white"
          >
            <span className="material-symbols-outlined">download</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-6">
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold text-white mb-2">Putu Sugianta</h1>
          <p className="text-primary font-bold">Sistem Informasi | Multimedia Specialist</p>
        </div>

        <section className="mb-12">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary">school</span>
            Pendidikan
          </h3>
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-slate-700">
              <div className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-primary"></div>
              <h4 className="text-white font-bold text-lg">Primakara University</h4>
              <p className="text-slate-400 text-sm mb-1">Jurusan Sistem Informasi</p>
              <p className="text-primary text-xs font-bold">2023 — Sekarang</p>
            </div>
            <div className="relative pl-8 border-l border-slate-700">
              <div className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-slate-500"></div>
              <h4 className="text-white font-bold text-lg">SMK Negeri 1 Nusa Penida</h4>
              <p className="text-slate-400 text-sm mb-1">Jurusan MultiMedia</p>
              <p className="text-slate-500 text-xs font-bold">2020 — 2023</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary">work</span>
            Pengalaman Kerja
          </h3>
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-slate-700">
              <div className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-primary"></div>
              <h4 className="text-white font-bold text-lg">Training Ayo Print Bali</h4>
              <p className="text-slate-400 text-sm mb-1">Operator Percetakan & Designer</p>
              <p className="text-primary text-xs font-bold">2022 (6 Bulan)</p>
              <ul className="text-xs text-slate-400 mt-2 space-y-1 list-disc ml-3">
                <li>Terlibat dalam proses desain</li>
                <li>Produksi cetak & pengoperasian mesin</li>
                <li>Quality Control sesuai standar perusahaan</li>
              </ul>
            </div>
            <div className="relative pl-8 border-l border-slate-700">
              <div className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-blue-500/50"></div>
              <h4 className="text-white font-bold text-lg">Mengerjakan Proyek Kampus</h4>
              <p className="text-slate-400 text-sm mb-1">Mobile & UI/UX Developer</p>
              <ul className="text-xs text-slate-400 mt-2 space-y-1 list-disc ml-3">
                <li>Membuat Design UI/UX & Prototyping</li>
                <li>Website Portfolio & Mobile App Kost (Supabase)</li>
                <li>Framework Flutter integration</li>
                <li>Proyek Keuangan Bisnis Ecova</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;
