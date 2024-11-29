import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiCode, FiPenTool, FiLayers, FiCheckCircle } from "react-icons/fi";
import AboutPic from "../assets/Images/About.png";
import ContactFormModal from "./ContactMe";
import SkillsModal from "./Skills";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSkillsOpen, setSkillsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="about"
      className="relative w-full py-14 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200 overflow-hidden"
    >
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-16 right-16 w-48 h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse-slow" />

      {/* Decorative Floating Squares */}
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg animate-float opacity-70" />
      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg animate-float-slow opacity-70" />

      {/* Decorative Wave Effect */}
      <div className="absolute bottom-0 right-0 w-full h-full opacity-50 pointer-events-none rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave-effect"
        >
          <path
            fill="url(#gradient1)"
            fillOpacity="1"
            d="M0,160L1440,96L1440,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38B2AC" />
              <stop offset="100%" stopColor="#4C51BF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12" data-aos="fade-up">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-300">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            I’m Priyanshi, a fresher UI/UX designer passionate about creating
            intuitive, user-friendly interfaces that bring ideas to life.
            Combining creativity and technical expertise, I aim to craft
            memorable digital experiences.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div
            className="relative w-full h-96 lg:h-auto flex justify-center items-center"
            data-aos="fade-right"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-purple-400 opacity-30 animate-pulse-slow blur-3xl" />
              <img
                src={AboutPic}
                alt="About Me Illustration"
                className="w-full h-full animate-bounce-slow"
              />
            </div>
          </div>

          
          <div className="space-y-6" data-aos="fade-left">
            
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-teal-200">
                Skills & Expertise
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-3">
                  <FiPenTool className="text-teal-200 text-xl" />
                  Proficient in UI/UX tools like Figma, Adobe XD
                </li>
                <li className="flex items-center gap-3">
                  <FiLayers className="text-teal-200 text-xl" />
                  Strong skills in wireframing, prototyping, and user research
                </li>
                <li className="flex items-center gap-3">
                  <FiCode className="text-teal-200 text-xl" />
                  Basic frontend skills: HTML, CSS, React.js
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-teal-200 text-xl" />
                  Passionate about design thinking and user-centric design
                </li>
              </ul>
            </div>

            
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-teal-300">
                My Mission
              </h3>
              <p className="text-gray-300 text-justify">
                As a fresher, my mission is to grow into a design role where I
                can contribute to creating impactful digital solutions. I aim to
                learn, innovate, and bring value to projects by focusing on
                design aesthetics and functionality.
              </p>
            </div>

            
            <div className="flex justify-center lg:justify-start mt-6">
            <a
              href="#contact"
              className="inline-block px-8 py-3 text-lg font-semibold text-gray-900 bg-gradient-to-r from-teal-300 to-purple-400 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              onClick={handleOpenModal}
            >
              Let’s Connect
            </a>
            <a
    href="#skills"
    className="relative inline-block px-8 py-3 ml-3 text-lg font-semibold text-gray-200 bg-gray-900 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 group"
    onClick={() => setSkillsOpen(true)}
  >
    
    <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full blur-md opacity-80 group-hover:opacity-60 transition-opacity duration-300"></span>
    
    <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-300">
      Skills
    </span>
    
    <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </a>


            </div>

            
            
          </div>
        </div>
      </div>
      <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <SkillsModal isOpen={isSkillsOpen} onClose={() => setSkillsOpen(false)} />
    </section>
  );
};

export default AboutMe;
