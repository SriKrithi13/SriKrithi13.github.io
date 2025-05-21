import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section id="about" className="py-16 bg-white text-center dark:bg-gray-900 dark:text-white px-4" initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    viewport={{ once: true }}>
      <h2 className="text-4xl font-bold text-[#640D5F] dark:text-white mb-4">About Me</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-white">
        I'm <span className="font-semibold text-purple-700 dark:text-white">Sri Krithi Alla</span>, a passionate and goal-driven software developer. I love building full-stack web applications, solving real-world problems, and continuously learning new technologies to level up my skills.
      </p>
      </motion.section>
  );
};

export default About;
