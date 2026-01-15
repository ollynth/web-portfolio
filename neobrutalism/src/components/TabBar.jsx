import React from 'react';
import { X, Home, Code2, FolderKanban, Mail } from 'lucide-react';

const tabs = [
  { id: 'home', icon: Home, label: 'home.jsx', color: 'bg-yellow-200' },
  { id: 'skills', icon: Code2, label: 'skills.jsx', color: 'bg-blue-200' },
  { id: 'projects', icon: FolderKanban, label: 'projects.jsx', color: 'bg-pink-200' },
  { id: 'contact', icon: Mail, label: 'contact.jsx', color: 'bg-green-200' },
];

export default function TabBar({ activeSection, onNavigate }) {
  return (
    <div className="hidden sm:flex bg-[#1a1a2e] border-b-4 border-black overflow-x-auto">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeSection === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 font-mono text-sm border-r-2 transition-all shrink-0 rounded-none
              ${isActive 
                ? 'bg-[#78788f] text-white border-t-2 border-t-purple-400' 
                : 'text-gray-400 hover:bg-[#1a1a2e] border-t-2 border-t-transparent'
              }`}
          >
            <div className={`w-3 h-3 ${tab.color} border-2 border-black`}></div>
            <span className="hidden sm:block">{tab.label}</span>
            {isActive && (
              <X className="w-4 h-4 ml-2 text-gray-500 hover:text-white" />
            )}
          </button>
        );
      })}
    </div>
  );
}