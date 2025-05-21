import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import myPhoto from '../assets/mainphoto.png';
import { TypeAnimation } from 'react-type-animation';


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
  <h1 className="text-5xl font-bold dark:text-white text-[#640D5F]">Hey there!, I'm Krithi</h1> 
  <TypeAnimation
  sequence={[
    "Software Developer",
    2000,
    '',
    1000,
  ]}
  wrapper="h2"
  cursor={true}
  repeat={Infinity}
  className="text-2xl dark:text-white text-[#640D5F]"
/>

  <div className="flex justify-center md:justify-start space-x-6 text-3xl text-[#640D5F]  dark:text-white">
    <a href="https://www.linkedin.com/in/sri-krithi-alla/" target="_blank" rel="noopener noreferrer" className='hover:scale-110'><FaLinkedin /></a>
    <a href="https://github.com/SriKrithi13" target="_blank" rel="noopener noreferrer" className='hover:scale-110'><FaGithub /></a>
    <a href="mailto:srikrithialla@gmail.com" className='hover:scale-110'><FaEnvelope /></a>
  </div>

  <a
    href="/SRIKRITHIALLA_Resume_A4.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 px-6 py-3 bg-[#640D5F] text-white dark:text-white font-semibold rounded-lg hover:scale-110 transition"
  >
    View My Resume
  </a>
</div>

    </section>
  );
};

export default Home;
