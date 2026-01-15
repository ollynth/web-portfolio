import { Home, Code2, FolderKanban, Mail, ChevronRight } from 'lucide-react';
const Sidebar = ({ activeSection, onNavigate }) => {
  const menuItems = [
    { id: 'home', label: 'home.jsx', icon: HomeIcon },
    { id: 'skills', label: 'skills.jsx', icon: CodeIcon },
    { id: 'projects', label: 'projects.jsx', icon: FolderIcon },
    { id: 'contact', label: 'contact.jsx', icon: MailIcon },
  ];

  return (
    <aside className="sidebar">
        {/* <div className="sidebar-header">
            <span className="sidebar-title">PORTFOLIO</span>
        </div> */}
        <div className="flex items-center gap-2 p-3.5 text-gray-400 text-xs uppercase tracking-wider border-b-2 border-gray-700">
          <ChevronRight className="w-3 h-3" />
          Explore
        </div>
        <div className="px-4 py-2 text-gray-500 text-xs uppercase tracking-wider">
          Portfolio
        </div>
        <nav className="sidebar-nav">
            {menuItems.map((item) => (
            <button
                key={item.id}
                className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
            >
                <item.icon className="sidebar-icon" />
                <span className="sidebar-label">{item.label}</span>
            </button>
            ))}
        </nav>
        {/* Bottom Status */}
        <div className="sidebar-footer">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="sidebar-title">Available for Work</span>
            </div>
        </div>
        
    </aside>
  );
};

// Custom SVG Icons
const HomeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const CodeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const FolderIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default Sidebar;
