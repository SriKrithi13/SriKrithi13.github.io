import React from 'react';
import projectImg1 from "../assets/projectimg.jpg"; 
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Smart Barter",
    github: "https://github.com/yourusername/smart-barter",
    image: projectImg1,
    description: "A peer-to-peer item exchange platform with real-time chat and user authentication. Deployed on Render.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"]

  },
  {
    title: "E-Commerce Dashboard",
    github: "https://github.com/yourusername/ecommerce-dashboard",
    image: projectImg1,
    description: "A data-driven admin dashboard with dynamic sales analytics and AWS Lambda integration.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"]

    
  },
  {
    title: "AI Chat Support Portal",
    github: "https://github.com/yourusername/ai-chat-support",
    image: projectImg1,
    description: "A support portal with ticket management, integrated AI chatbot, and AWS S3 for file storage.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"]

  },
];


const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-purple-100 shadow-inner dark:shadow-[inset_0_-2px_6px_rgba(255,255,255,0.1)]  dark:bg-gray-900 dark:text-white px-4 text-center">
      <h2 className="text-4xl font-bold text-[#640D5F] mt-5 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-md text-left">
            {/* Title with GitHub Icon */}
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

            {/* Description */}
            <p className="text-gray-700 mb-4">{project.description}</p>

            {/* Tech Stack */}
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
    </section>
  );
};


export default Projects;
