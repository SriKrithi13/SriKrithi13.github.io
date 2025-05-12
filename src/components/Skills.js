import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaGitAlt, FaDocker, FaAngular } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiExpress, SiMongodb, SiSpring, SiPostgresql, SiTailwindcss, SiAmazon  } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import PythonLogo from './python-logo-only.png'; 

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-800" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'Java', icon: <FaJava className="text-red-700" /> },

  { 
    name: 'Python', 
    icon: (
      <div className="w-16 h-16 p-2 bg-white rounded-full  flex items-center justify-center">
        <img src={PythonLogo} alt="Python" className="w-full h-full object-contain" />
      </div>
    )
  },

  { name: 'CPP', icon: <SiCplusplus className="text-blue-600" /> },
  { name: 'Spring Boot', icon: <SiSpring className="text-green-500" /> },
  { name: 'Angular', icon: <FaAngular className="text-red-600" /> },
  { name: 'MySQL', icon: <GrMysql className="text-blue-700" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-600" /> },
  { name: 'Docker', icon: <FaDocker className="text-[#1D63ED]" /> },
  { name: 'AWS', icon: <SiAmazon className="text-[#232f3e]" /> },
  

];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-purple-100 dark:bg-gray-900 dark:text-white text-center px-4">
      <h2 className="text-4xl font-bold text-[#640D5F] dark:text-white mb-8 mt-5 ">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="group flex flex-col items-center">
            <div className="text-6xl p-4 bg-white rounded-full shadow-lg transition transform hover:scale-110 hover:shadow-xl">
              {skill.icon}
            </div>
            <span className="text-sm mt-2 text-gray-700 dark:text-white  ">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
