import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

interface MainContentProps {
  isSidebarOpen: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ isSidebarOpen }) => {
  return (
    <main className={`flex-grow p-8 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default MainContent