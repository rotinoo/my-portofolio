import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const ContactItem = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <div className="flex items-center space-x-3 text-primary-700">
    <Icon size={20} className="text-primary-500" />
    <span>{text}</span>
  </div>
)

const Contact = () => {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold mb-4 text-primary-700">Contact Me</h2>
      <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-primary-500">
        <div className="space-y-4">
          <ContactItem icon={Mail} text="robby.agn@gmail.com" />
          <ContactItem icon={Phone} text="+62 (812) 1746-5784" />
          <ContactItem icon={MapPin} text="Jakarta, Indonesia" />
        </div>
        <div className="mt-6">
          <a href="mailto:robby.agn@gmail.com" className="inline-block bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200">
            Send me a message
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact