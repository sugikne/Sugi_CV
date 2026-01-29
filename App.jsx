
import React, { useState } from 'react';
import { AppSection } from './types';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App = () => {
  const [currentSection, setCurrentSection] = useState(AppSection.HOME);

  const renderContent = () => {
    switch (currentSection) {
      case AppSection.HOME:
        return <Home onNavigate={setCurrentSection} />;
      case AppSection.ABOUT:
        return <About onNavigate={setCurrentSection} />;
      case AppSection.PORTFOLIO:
        return <Portfolio onNavigate={setCurrentSection} />;
      case AppSection.RESUME:
        return <Resume onNavigate={setCurrentSection} />;
      case AppSection.CONTACT:
        return <Contact onNavigate={setCurrentSection} />;
      default:
        return <Home onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-dark overflow-x-hidden">
      {renderContent()}
      
      {currentSection !== AppSection.HOME && (
        <nav className="fixed bottom-0 left-0 right-0 bg-background-dark/80 backdrop-blur-2xl border-t border-slate-800 px-8 py-3 flex justify-between items-center z-50 pb-8">
          <button 
            onClick={() => setCurrentSection(AppSection.PORTFOLIO)}
            className={`flex flex-col items-center gap-1 transition-colors ${currentSection === AppSection.PORTFOLIO ? 'text-primary' : 'text-slate-500'}`}
          >
            <span className={`material-symbols-outlined ${currentSection === AppSection.PORTFOLIO ? '!fill-1' : ''}`}>grid_view</span>
            <span className="text-[10px] font-bold tracking-wide uppercase">Projects</span>
          </button>
          <button 
            onClick={() => setCurrentSection(AppSection.ABOUT)}
            className={`flex flex-col items-center gap-1 transition-colors ${currentSection === AppSection.ABOUT ? 'text-primary' : 'text-slate-500'}`}
          >
            <span className={`material-symbols-outlined ${currentSection === AppSection.ABOUT ? '!fill-1' : ''}`}>person</span>
            <span className="text-[10px] font-bold tracking-wide uppercase">About</span>
          </button>
          <button 
            onClick={() => setCurrentSection(AppSection.RESUME)}
            className={`flex flex-col items-center gap-1 transition-colors ${currentSection === AppSection.RESUME ? 'text-primary' : 'text-slate-500'}`}
          >
            <span className={`material-symbols-outlined ${currentSection === AppSection.RESUME ? '!fill-1' : ''}`}>description</span>
            <span className="text-[10px] font-bold tracking-wide uppercase">Resume</span>
          </button>
          <button 
            onClick={() => setCurrentSection(AppSection.CONTACT)}
            className={`flex flex-col items-center gap-1 transition-colors ${currentSection === AppSection.CONTACT ? 'text-primary' : 'text-slate-500'}`}
          >
            <span className={`material-symbols-outlined ${currentSection === AppSection.CONTACT ? '!fill-1' : ''}`}>alternate_email</span>
            <span className="text-[10px] font-bold tracking-wide uppercase">Contact</span>
          </button>
        </nav>
      )}
    </div>
  );
};

export default App;
