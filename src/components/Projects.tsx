import React from 'react'
import { ExternalLink } from 'lucide-react'

const ProjectCard = ({ title, description, link, imageSrc }: { title: string; description: string; link?: string; imageSrc?: string }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-primary-500">
    {imageSrc && (
      <img src={imageSrc} alt={title} className="w-full h-32 object-cover" />
    )}
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-primary-700">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
    {link && (
      <div className="bg-primary-50 px-6 py-3">
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 flex items-center">
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    )}
  </div>
)

const Projects = () => {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-primary-700">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="HairMatch"
          description="As the project leader, I planned the architecture and developed this hairstyle recommendation system, utilizing machine learning and cloud computing to suggest personalized styles based on facial features and preferences."
          link="https://github.com/rotinoo/hairmatch"
          imageSrc="https://storage.googleapis.com/rotinoo-public/hairmatch-1"
        />
        <ProjectCard
          title="Website Deployment & FTP Tool"
          description="Currently in development, this application will enable instant deployment of websites for FTP purposes, allowing clients to access them via a browser without the need for software installation."
        />
        <ProjectCard
          title="Key Boost"
          description="A simple application designed to amplify key presses. This app allows you to repeat a specified key multiple times."
          link="https://github.com/rotinoo/keyboost"
        />
        <ProjectCard
          title="Instant Site"
          description="A simple application for easy website deployment on local servers. Part of a larger project that I have been working on."
          link="https://github.com/rotinoo/instant-site"
        />
        <ProjectCard
          title="Personal Bio Website"
          description="This Website! A personal website showcasing my skills, experience, and projects in IT, with a focus on cloud computing and web development."
          link="https://rotinoo.github.io/my-portofolio/"
        />
        <ProjectCard
          title="Network Configuration Project"
          description="Configured and managed network devices including switches and routers for a university project. Set up and maintained FTP and web servers on Ubuntu Linux, ensuring high availability and security."
          link="https://bit.ly/Netw_Report"
        />
      </div>
    </section>
  )
}

export default Projects
