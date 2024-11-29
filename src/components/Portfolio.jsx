import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiLayers, FiEdit, FiTrello, FiCheckCircle } from "react-icons/fi";
import Wireframing from '../assets/Images/Wireframing.webp';
import Mockups from '../assets/Images/Mockups.webp';
import Research from '../assets/Images/Research.png';
import { SiTestcafe } from "react-icons/si";;

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section id="portfolio" className="w-full py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200">
      {/* Header */}
      <div className="text-center space-y-4 mb-12" data-aos="fade-up">
        <h2 className="text-5xl pb-5 font-extrabold text-transparent mb-10 bg-clip-text bg-gradient-to-r from-teal-300 to-purple-300">
          My Portfolio
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          As a fresher, I may not have extensive project experience yet, but I’ve honed my skills by working on mock projects, learning UI/UX principles, and exploring design tools. Below are the areas I have focused on and my approach to design.
        </p>
      </div>

      {/* Portfolio Details*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-6">
        
        <div
          className="relative group overflow-hidden rounded-xl bg-gray-800 p-6 shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:shadow-2xl"
          data-aos="fade-up"
        >
          <div className="relative w-full h-64 mb-6">
            <img
              src={Wireframing}
              alt="Wireframe Design"
              className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-300"
            />
          </div>
          <h3 className="text-2xl font-semibold text-teal-300 mb-4 group-hover:text-white transition-colors duration-300">
            Wireframing & Prototyping
          </h3>
          <p className="text-gray-400 mb-4 group-hover:text-white transition-colors duration-300">
            Created wireframes for a hypothetical e-commerce platform. Focused on user flows and overall page structure to ensure smooth navigation and intuitive design.
          </p>
          <div className="absolute bottom-4 left-4 text-teal-300 text-xl">
            <FiLayers />
          </div>
        </div>

        
        <div
          className="relative group overflow-hidden rounded-xl bg-gray-800 p-6 shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative w-full h-64 mb-6">
            <img
              src={Mockups}
              alt="UI Design"
              className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-300"
            />
          </div>
          <h3 className="text-2xl font-semibold text-teal-300 mb-4 group-hover:text-white transition-colors duration-300">
            UI Design & Mockups
          </h3>
          <p className="text-gray-400 mb-4 group-hover:text-white transition-colors duration-300">
            Designed UI mockups for a personal project using Figma. Focused on creating modern, minimalist interfaces with emphasis on visual hierarchy and accessibility.
          </p>
          <div className="absolute bottom-4 left-4 text-teal-300 text-xl">
            <FiEdit />
          </div>
        </div>

        
        <div
          className="relative group overflow-hidden rounded-xl bg-gray-800 p-6 shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="relative w-full h-64 mb-6">
            <img
              src={Research}
              alt="User Research"
              className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-300"
            />
          </div>
          <h3 className="text-2xl font-semibold text-teal-300 mb-4 group-hover:text-white transition-colors duration-300">
            User Research & Testing
          </h3>
          <p className="text-gray-400 mb-4 group-hover:text-white transition-colors duration-300">
            Conducted mock user testing for a hypothetical project. Focused on gathering user feedback and identifying pain points in order to refine the design process.
          </p>
          <div className="absolute bottom-4 left-4 text-teal-300 text-xl">
            <FiTrello />
          </div>
        </div>
      </div>

      {/* Design Process */}
      <div className="relative mt-16 py-16">
  {/* Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-teal-700 to-indigo-900 opacity-70 blur-2xl transform scale-150 -z-10"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1) 0%,rgba(0,0,0,0) 70%)] opacity-40 -z-10"></div>

  {/* Heading */}
  <h3 className="text-3xl md:text-4xl font-bold text-teal-300 text-center mb-8">
    My Design Process
  </h3>
  <p className="text-gray-200 text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 px-4">
    My design process focuses on understanding users and crafting intuitive, impactful designs through a seamless flow.
  </p>

  {/* Process Flow */}
  <div className="relative flex flex-col sm:flex-row items-center sm:justify-between space-y-8 sm:space-y-0 sm:space-x-8 lg:space-x-16 max-w-5xl mx-auto px-4">
    {/* Step 1 */}
    <div className="group relative flex flex-col items-center text-center bg-gray-800 p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
      <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-r from-teal-400 to-purple-500 text-white text-2xl md:text-3xl rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300">
        <FiLayers />
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-teal-500 text-white text-xs sm:text-sm py-1 px-3 rounded-lg shadow-md">
          Step 1
        </span>
      </div>
      <h4 className="text-base md:text-lg font-semibold text-gray-100 mt-4 group-hover:text-teal-300">
        Research
      </h4>
      <p className="text-gray-400 max-w-xs text-sm mt-2 group-hover:text-gray-200">
        Understanding target users and their needs through in-depth research.
      </p>
    </div>

    {/* Arrow */}
    <div className="hidden sm:flex items-center justify-center text-teal-300 text-2xl">
      <SiTestcafe />
    </div>

    {/* Step 2 */}
    <div className="group relative flex flex-col items-center text-center bg-gray-800 p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
      <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white text-2xl md:text-3xl rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300">
        <FiEdit />
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-purple-500 text-white text-xs sm:text-sm py-1 px-3 rounded-lg shadow-md">
          Step 2
        </span>
      </div>
      <h4 className="text-base md:text-lg font-semibold text-gray-100 mt-4 group-hover:text-purple-400">
        Wireframing
      </h4>
      <p className="text-gray-400 max-w-xs text-sm mt-2 group-hover:text-gray-200">
        Creating wireframes to visualize structure and user flow.
      </p>
    </div>

    {/* Arrow */}
    <div className="hidden sm:flex items-center justify-center text-teal-300 text-2xl">
      <SiTestcafe />
    </div>

    {/* Step 3 */}
    <div className="group relative flex flex-col items-center text-center bg-gray-800 p-6 shadow-2xl hover:scale-105 transition-transform duration-300">
      <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-r from-pink-500 to-teal-400 text-white text-2xl md:text-3xl rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300">
        <FiCheckCircle />
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-pink-500 text-white text-xs sm:text-sm py-1 px-3 rounded-lg shadow-md">
          Step 3
        </span>
      </div>
      <h4 className="text-base md:text-lg font-semibold text-gray-100 mt-4 group-hover:text-pink-300">
        Testing
      </h4>
      <p className="text-gray-400 max-w-xs text-sm mt-2 group-hover:text-gray-200">
        Iterating on designs based on user testing and feedback.
      </p>
    </div>
  </div>
</div>

    </section>
  );
};

export default Portfolio;
