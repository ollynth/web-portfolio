import React, { useState } from 'react';
import './App.css'
import Sidebar from './components/Sidebar'
import TabBar from './components/TabBar';
import HomeSection from './components/HomeSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection onNavigate={handleNavigate} />;
      case 'skills':
        return <SkillsSection  onNavigate={handleNavigate}/>;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e] overflow-hidden">
      
      <header className="bg-[#323233] border-b-4 border-black px-3 sm:px-4 py-2 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400 border-2 border-red-600"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400 border-2 border-yellow-600"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400 border-2 border-green-600"></div>
          </div>
          <span className="text-gray-400 font-mono text-xs sm:text-sm hidden sm:block">
            ollynth_portfolio — VS Code
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
          <span className="hidden lg:block font-mono">⌘ + P to navigate</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
          <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

          {/* Main content */}
          <main className="flex-1 flex flex-col overflow-hidden">
             {/* Tabs */}
            <TabBar activeSection={activeSection} onNavigate={handleNavigate} />  

            {/* Content */}
            <div className="flex-1 bg-[#1a1a2e] overflow-y-auto">
              {renderSection()}
            </div>
          </main>
      </div>

      <footer className="bg-[#a855f7] border-t-4 border-black px-3 sm:px-4 py-1 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
            </svg>
            <span className="font-mono text-xs sm:text-sm font-medium">main</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4m0 4h.01"/>
            </svg>
            <span className="font-mono text-xs sm:text-sm">0 problems</span>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono">
          <span className="hidden sm:block">&lt;/&gt; React + TailwindCSS</span>
          <span className="hidden md:block">UTF-8</span>
          <span>Ln 1, Col 1</span>
        </div>
      </footer>
    </div>
  )
}

export default App
