
import React, { useState } from 'react';
import { AppSection } from '../types';

const PROJECTS = [
  // {
  //   id: '1',
  //   title: 'Mobile App Kost',
  //   description: 'A mobile application for managing boarding houses (Kost).',
  //   longDescription: 'Developed using Flutter for the mobile interface and Supabase for real-time database management. Features include room availability tracking, payment integration, and tenant reporting system. Proyek ini dirancang untuk memudahkan pemilik kost dalam memantau pembayaran dan ketersediaan kamar secara real-time melalui smartphone.',
  //   tags: ['Flutter', 'Supabase', 'Dart'],
  //   imageUrl: '',
  //   icon: 'smartphone',
  //   category: 'Mobile',
  //   demoUrl: 'https://github.com/putusugianta'
  // },
  {
    id: '2',
    title: 'HinuNusaPenidaTrip',
    description: 'Website resmi untuk layanan tour & travel di Nusa Penida.',
    longDescription: 'Website booking travel yang responsif, menampilkan paket tour menarik di Nusa Penida. Dibangun dengan fokus pada kecepatan akses dan kemudahan pengguna (User Experience) untuk meningkatkan konversi pemesanan tour secara online.',
    tags: ['HTML', 'React','JavaScript', 'UI/UX'],
    imageUrl: '/hinusapenida.jpeg',
    icon: 'explore',
    category: 'Web',
    demoUrl: 'https://hinusapenidatrip.com'
  },
  // {
  //   id: '3',
  //   title: 'Cooming Soon',
  //   description: 'Web-based admin for printing service management.',
  //   longDescription: 'Inspired by work at Ayo Print Bali. A web application to manage printing orders, stock management, and customer data. Streamlining the workflow from design to production. Sistem ini mencakup modul inventaris tinta dan kertas serta pelacakan status pengerjaan desain.',
  //   tags: ['React', 'MySQL', 'Dashboard'],
  //   imageUrl: 'https://picsum.photos/seed/print_system/1200/800',
  //   icon: 'print_connect',
  //   category: 'Web',
  //   demoUrl: 'https://github.com/putusugianta'
  // },
  {
    id: '4',
    title: 'Kendi Cafe Web',
    description: 'Website katalog menu dan landing page untuk Kendi Cafe.',
    longDescription: 'Website estetik untuk Kendi Cafe yang menampilkan menu andalan, lokasi, dan suasana cafe. Desain minimalis yang selaras dengan brand identity cafe untuk menarik pelanggan milenial dan turis.',
    tags: ['HTML', 'React','JavaScript', 'UI/UX'],
    imageUrl: '/kendicafe.jpeg',
    icon: 'coffee',
    category: 'Web',
    demoUrl: 'https://kendi-cafe.vercel.app/'
  },
  // {
  //   id: '5',
  //   title: 'Ecova Finance Proyek',
  //   description: 'Structured financial model for business viability.',
  //   longDescription: 'Designed a comprehensive financial planning model including budgeting, cash flow projection, and break-even analysis using accounting principles. Proyek ini membuktikan kelayakan bisnis Ecova melalui perhitungan ROI yang mendalam dan analisis risiko keuangan.',
  //   tags: ['Accounting', 'Planning'],
  //   imageUrl: '',
  //   icon: 'monitoring',
  //   category: 'Finance',
  //   demoUrl: ''
  // }
];

const Portfolio = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ['All', 'Mobile', 'Web', 'Finance'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-background-dark min-h-screen text-white animate-in slide-in-from-right duration-300">
      <header className="sticky top-0 z-40 bg-background-dark/80 backdrop-blur-md p-4 border-b border-slate-800">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Project Gallery</h2>
          <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-bold">{filteredProjects.length} Items</span>
        </div>
      </header>

      <main className="max-w-md mx-auto pb-32">
        <section className="px-6 pt-10 pb-4">
          <h1 className="text-4xl font-black tracking-tighter mb-2">My Work<span className="text-primary">.</span></h1>
          <p className="text-slate-500 text-sm font-medium">Klik kartu untuk detail, atau gunakan tombol di dalam untuk demo.</p>
        </section>

        <section className="flex gap-2 px-6 py-4 overflow-x-auto no-scrollbar">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex h-10 shrink-0 items-center justify-center rounded-2xl px-5 transition-all border text-xs font-bold ${activeCategory === cat ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
            >
              {cat}
            </button>
          ))}
        </section>

        <section className="px-6 grid grid-cols-1 gap-6 mt-4">
          {filteredProjects.map(project => (
            <article 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col rounded-[32px] overflow-hidden bg-card-dark border border-slate-800 transition-all hover:border-primary/50 cursor-pointer active:scale-[0.98]"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md size-10 rounded-2xl flex items-center justify-center border border-white/10">
                  <span className="material-symbols-outlined text-primary">{project.icon}</span>
                </div>
                <div className="absolute bottom-4 left-6">
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">{project.category}</p>
                   <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[9px] font-black px-2 py-1 rounded-lg bg-slate-700/50 text-slate-400 border border-slate-700 uppercase">
                            {tag}
                            </span>
                        ))}
                    </div>
                    <span className="material-symbols-outlined text-slate-600 text-sm">visibility</span>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-background-dark/95 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto no-scrollbar">
          <div className="max-w-md mx-auto min-h-screen bg-background-dark relative pb-20">
            <button 
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 left-6 z-10 size-12 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="w-full aspect-video overflow-hidden">
              <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>

            <div className="px-6 py-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <span className="material-symbols-outlined text-xl">{selectedProject.icon}</span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{selectedProject.category} Project</p>
                  <h2 className="text-2xl font-black text-white">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="h-px w-full bg-slate-800 my-6"></div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">Deskripsi Proyek</h4>
                  <p className="text-slate-300 leading-relaxed text-[15px]">{selectedProject.longDescription}</p>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">Tech Stack & Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-xl text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-16 bg-primary text-white rounded-2xl font-black flex items-center justify-center gap-3 shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                  >
                    <span>Lihat Demo / Live Site</span>
                    <span className="material-symbols-outlined">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
