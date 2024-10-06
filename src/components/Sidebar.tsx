import React from 'react'
import { User, Code, Briefcase, Mail, Github, Linkedin, Instagram, Menu, X } from 'lucide-react'

interface NavItemProps {
  icon: React.ElementType;
  text: string;
  isOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, text, isOpen }) => (
  <a href={`#${text.toLowerCase()}`} className={`flex items-center ${isOpen ? 'px-4 py-2 space-x-2' : 'justify-center py-4'} text-primary-700 hover:bg-primary-100 rounded-lg transition-colors duration-200 relative group`}>
    <Icon size={20} />
    {isOpen ? (
      <span>{text}</span>
    ) : (
      <span className="absolute left-full ml-2 px-2 py-1 bg-primary-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {text}
      </span>
    )}
  </a>
)

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  isMobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, isMobile }) => {
  return (
    <aside className={`fixed inset-y-0 left-0 z-50 bg-white shadow-lg transition-all duration-300 ${isOpen ? 'w-64' : 'w-0 md:w-20'}`}>
      <div className="flex flex-col h-full">
        <div className={`p-5 bg-primary-600 flex items-center ${isOpen ? 'justify-between' : 'justify-center'} relative h-20`}>
          {isOpen ? (
            <div className="flex items-center justify-between w-full ">
              <h1 className="text-2xl font-bold text-white hover:bg-primary-500">Profile</h1>
              <button onClick={toggleSidebar} className="text-white p-1 rounded-full hover:bg-primary-500 transition-colors duration-200 ml-2">
                <X size={28} strokeWidth={2} />
              </button>
            </div>
          ) : (
            <button onClick={toggleSidebar} className="text-white p-2 rounded-full hover:bg-primary-500 transition-colors duration-200">
              <Menu size={24} />
            </button>
          )}
        </div>
        <nav className={`flex-grow py-4 ${isOpen ? 'px-4' : 'px-0'} ${isMobile && !isOpen ? 'hidden' : 'block'}`}>
          <NavItem icon={User} text="About" isOpen={isOpen} />
          <NavItem icon={Code} text="Skills" isOpen={isOpen} />
          <NavItem icon={Briefcase} text="Projects" isOpen={isOpen} />
          <NavItem icon={Mail} text="Contact" isOpen={isOpen} />
        </nav>
        <div className={`p-5 ${isOpen ? 'flex justify-center space-x-4' : 'flex flex-col items-center space-y-4'} bg-primary-50 ${isMobile && !isOpen ? 'hidden' : 'block'}`}>
          <a href="https://github.com/rotinoo" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/robby-agustino/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/robby.gn/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
