import React from 'react'
import { Code, Cloud, Server } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-primary-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code size={24} />
          <Cloud size={24} />
          <Server size={24} />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#bio" className="hover:text-primary-200">About</a></li>
            <li><a href="#skills" className="hover:text-primary-200">Skills</a></li>
            <li><a href="#projects" className="hover:text-primary-200">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header