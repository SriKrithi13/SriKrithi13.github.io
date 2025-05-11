import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import myPhoto from '../assets/mainphoto.png';

const Home = () => {
  return (
    <section
  id="home"
  className="w-full flex flex-col md:flex-row items-center justify-center pt-40 pb-40 dark:to-gray-900 dark:text-white px-4 max-w-10xl mx-auto "
  >
      <div className="relative w-[360px] h-[360px] rounded-[20px] overflow-hidden shadow-xl mix-multiply bg-gradient-to-b from-white via-[#d9bff5]/50 to-[#d9bff5] mt-8">
  <img
    src={myPhoto}
    alt="Sri Krithi Alla"
    className="w-full h-full dark:text-white object-cover object-top brightness-125 scale-125 transition-transform duration-500 hover:scale-105"
  />
  </div>
      <div className="md:ml-20 mt-10 md:mt-0 text-center md:text-left text-white dark:text-white flex flex-col items-center md:items-start gap-4">
  <h1 className="text-4xl font-bold dark:text-white text-[#640D5F]">Hey there!, I'm Krithi</h1> 
  <h2 className="text-2xl dark:text-white text-[#640D5F]">Software Developer</h2>

  <div className="flex justify-center md:justify-start space-x-6 text-3xl text-[#640D5F] dark:text-white">
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    <a href="mailto:youremail@gmail.com"><FaEnvelope /></a>
  </div>

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 px-6 py-3 bg-[#640D5F] text-white dark:text-white font-semibold rounded-lg hover:bg-gray-100 transition"
  >
    View My Resume
  </a>
</div>

    </section>
  );
};

export default Home;
