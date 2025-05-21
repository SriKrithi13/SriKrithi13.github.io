import React from 'react';
import projectImg1 from "../assets/projectimg.jpg"; 
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Smart Barter",
    github: "https://github.com/SriKrithi13",
    image: projectImg1,
    description: "A peer-to-peer item exchange platform with real-time chat and user authentication. Deployed on Render.",
    techStack: ["React.js", "Node.js", "MongoDB"]

  },
  {
    title: "E-Commerce Dashboard",
    github: "https://github.com/SriKrithi13",
    image: projectImg1,
    description: "A data-driven admin dashboard with dynamic sales analytics and AWS Lambda integration.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"]

    
  },
  {
    title: "AI Chat Support Portal",
    github: "https://github.com/SriKrithi13",
    image: projectImg1,
    description: "A support portal with ticket management, integrated AI chatbot, and AWS S3 for file storage.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS S3", "OpenAI AP"]

  }
  
];


const Projects = () => {
  return (
    <motion.section id="projects" className="py-16 bg-purple-100 shadow-inner dark:shadow-[inset_0_-2px_6px_rgba(255,255,255,0.1)]  dark:bg-gray-900 dark:text-white px-4 text-center" initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true }}>
      <h2 className="text-4xl font-bold text-[#640D5F] dark:text-white mt-5 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-md text-left">
            <div className="flex justify-between space-x-2 mb-4">
              
              <h3 className="text-xl font-semibold text-[#640D5F]">{project.title}</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-800 hover:text-[#640D5F]"
              >
                <FaGithub />
              </a>
            </div>

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-68 h-50 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-purple-100 text-[#640D5F] px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </motion.section>
  );
};


export default Projects;
