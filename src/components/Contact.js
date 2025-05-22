import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Contact = () => {
  return (
    
    <footer className="bg-purple-100 dark:bg-gray-900 text-[#640D5F] dark:text-white py-6 px-4 shadow-inner dark:shadow-[inset_0_-2px_6px_rgba(255,255,255,0.1)]">
      <div className="max-w-6xl mx-auto flex  dark:text-white flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Sri Krithi Alla. All rights reserved.
        </p>
        <div className="flex items-center space-x-6 text-base">
          <a href="mailto:srikrithialla@gmail.com" className="flex items-center space-x-2 hover:text-purple-400">
            <FaEnvelope />
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/sri-krithi-alla/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-purple-400">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/SriKrithi13" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-purple-400">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href="#home" className="flex items-center space-x-2 hover:text-purple-400">
            <FaArrowUp />
            <span>Top</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
