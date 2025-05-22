import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      content:
        'I build responsive and visually engaging interfaces using HTML, CSS, Tailwind CSS, and JavaScript. With React.js, I’ve developed dynamic UI components like forms, modals, optimizing the performance with lazy loading, and efficient rendering techniques.',
    },
    {
      content:
        'I develop dynamic web applications using RESTful APIs, third-party integrations, and Firebase services, enabling real-time updates, efficient data retrieval and reliable error handling.',
    },
    {
      content:
        'Using Node.js, MongoDB, and PostgreSQL, I’ve built secure APIs with JWT authentication, form validation, protected routes, and full CRUD functionality.',
    },
    {
      content:
        'I orchestrate scalable deployments using CI/CD pipelines, and deploy applications on platforms like Netlify, GitHub Pages. I manage Git workflows, and ensure optimized, production-ready builds with reliable backend and frontend delivery. I also have worked with AWS and Azure cloud platforms',
    },
    {
      content:
      'When I’m not coding, you’ll probably find me singing—whether it’s in tune or not! Music keeps me creative, sharpens my ear for detail, and makes debugging feel a little more like hitting the right note.',
    },
  ];
  return (
    <motion.section id="about" className="py-16 bg-white text-center dark:bg-gray-900 dark:text-white px-4" initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}>

      <h2 className="text-4xl font-bold text-[#640D5F] dark:text-white mb-4">About Me</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-white">
        I'm <span className="font-semibold text-purple-700 dark:text-white">Sri Krithi Alla</span>, a passionate and goal-driven software developer. I love building full-stack web applications, solving real-world problems, and continuously learning new technologies to level up my skills.
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border-l-4 border-[#640D5F] hover:shadow-xl transition duration-300"
          >
            <p className="text-gray-700 dark:text-gray-300">{skill.content}</p>
          </div>
        ))}
      </div>
      </motion.section>
  );
};

export default About;
