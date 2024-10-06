import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const firstName = "Robby"
  const lastName = "Agustino"

  return (
    <section id="about" className="mb-16">
      <motion.h2 
        className="text-3xl font-bold mb-4 text-primary-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-primary-500 flex flex-col md:flex-row items-center">
        <motion.img 
          src="public/images/profile.jpg" 
          alt="Robby Agustino's Profile Picture" 
          className="w-80 h-80 rounded-full object-cover mb-4 md:mb-0 md:mr-6 border-4 border-primary-300" 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-primary-600 mb-2">
              Hello! my name is..
              <motion.span
                className="block text-3xl font-bold mt-2 text-primary-600" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                {firstName.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-0" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.2 }}
                  >
                    {letter}
                  </motion.span>
                ))}
                <span className="inline-block ml-1"> </span>
                {lastName.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-0" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + firstName.length * 0.1 + index * 0.1, duration: 0.2 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </h3>
            <motion.p 
              className="text-primary-700 leading-relaxed text-xl" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
             I'm an aspiring IT Developer with a deep passion for <strong>cloud computing</strong> and <strong>web development</strong>. Currently, I'm pursuing a journey in the <strong>Bangkit 2024 Cloud Computing Path</strong>, where I'm learning to harness the power of cloud infrastructure to build scalable and efficient applications. I enjoy tackling challenges in cloud technology, server management, and application deployment.
            </motion.p>
            <motion.p 
              className="text-primary-700 leading-relaxed text-xl" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              Throughout my studies, I've worked on various personal projects, including a <strong>Website Deployment & FTP Tool</strong> that streamlines the process of sharing files and deploying websites without the need for clients to install software. I've also set up <strong>cloud-based server hosting</strong> for multiplayer games, combining my love for technology with my personal interests.
            </motion.p>
            <motion.p 
              className="text-primary-700 leading-relaxed text-xl" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.5 }}
            >
              I'm constantly learning and growing in the field, driven by a curiosity to explore how technology can solve real-world problems. With each project, I aim to further develop my skills and contribute to innovative solutions.
            </motion.p>
            <motion.p 
              className="text-primary-700 leading-relaxed text-xl" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.5 }}
            >
              Feel free to explore my portfolio and projects!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
