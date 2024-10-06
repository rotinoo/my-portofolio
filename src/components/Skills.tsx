import React from 'react'
import { Cloud, Globe, Server, Database, Code, Terminal } from 'lucide-react'

const SkillItem = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md border-l-4 border-primary-500">
    <Icon size={24} className="text-primary-500" />
    <span className="text-primary-700 font-medium">{title}</span>
  </div>
)

const Skills = () => {
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-primary-700">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SkillItem icon={Cloud} title="Cloud Computing" />
        <SkillItem icon={Globe} title="Web Development" />
        <SkillItem icon={Server} title="App Deployment" />
        <SkillItem icon={Database} title="Database Management" />
        <SkillItem icon={Code} title="Programming" />
        <SkillItem icon={Terminal} title="DevOps" />
      </div>
    </section>
  )
}

export default Skills