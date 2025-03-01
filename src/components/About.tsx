import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
        <motion.div 
          className="w-64 h-64 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary-300 mb-4 md:mb-0 md:mr-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <img 
            src="https://i.imgur.com/p7oxPQa.jpeg" 
            alt="Robby Agustino's Profile Picture" 
            className="w-full h-full object-cover"
          />
        </motion.div>
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
                Robby Agustino
              </motion.span>
            </h3>
            <motion.p 
              className="text-primary-700 leading-relaxed text-xl" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              I'm an aspiring IT Developer with a deep passion for <strong>cloud computing</strong> and <strong>web development</strong>. I am a <strong>Bangkit 2024 Graduate</strong> from the Cloud Computing Path and an <strong>undergraduate Computer Science student</strong> at Universitas Bunda Mulia. I am passionate about harnessing the power of cloud infrastructure to build scalable and efficient applications.
            </motion.p>
            <motion.p 
              className="text-primary-700 leading-relaxed text-xl" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              Throughout my studies, I've worked on various projects, including a <strong>Website Deployment & FTP Tool</strong> that streamlines the process of sharing files and deploying websites without the need for clients to install software. I've also developed <strong>HairMatch</strong>, a machine learning-based hairstyle recommendation system that helps users find the perfect hairstyle based on their facial features. Additionally, I have set up <strong>cloud-based server hosting</strong> for multiplayer games, combining my love for technology with my personal interests.
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
  );
};

export default About;
