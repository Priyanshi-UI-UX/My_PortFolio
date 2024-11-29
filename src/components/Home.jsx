import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowDown } from "react-icons/fi";
import Hero1 from '../assets/Images/Hero1.png';

const Hero = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-teal-100 via-blue-50 to-indigo-100 text-gray-800 overflow-hidden" id="home">
      
      <div className="absolute inset-0 z-0">
        
        <svg
          className="absolute top-0 left-0 w-full h-auto opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#a8dadc"
            d="M0,224L48,202.7C96,181,192,139,288,122.7C384,107,480,117,576,133.3C672,149,768,171,864,165.3C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        
        <div className="absolute top-12 left-20 w-24 h-24 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-lg opacity-40 animate-float" />
        <div className="absolute bottom-16 right-28 w-32 h-32 bg-gradient-to-br from-blue-300 to-teal-400 rounded-full blur-xl opacity-30 animate-float-slow" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-md opacity-50 animate-bounce-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center items-center h-full relative z-10">
        
        <div className="text-center space-y-8">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-teal-600 to-blue-700 tracking-wide leading-tight drop-shadow-md"
            data-aos="fade-up"
          >
            Crafting User-Centric Experiences
          </h1>

          <p
            className="text-lg sm:text-xl font-medium text-gray-700 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Hi, I'm Priyanshi, a passionate UI/UX Designer creating innovative,
            user-centered interfaces. Let’s make your vision stand out!
          </p>

          
          <a
            href="#portfolio"
            className="mt-6 inline-block px-10 py-3 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-purple-600 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:animate-tilt hover:px-10"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Explore My Work
          </a>
        </div>

       {/* Image Section */}
<div className="absolute bottom-5 w-full flex justify-end items-center">
  <div
    className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 crt-image bg-transparent bg-center absolute right-[-15px] sm:right-[-20px] md:right-[-30px] bottom-5 transform hover:scale-105 transition-all duration-500 animate-float-infinite"
    style={{
      backgroundImage: `url(${Hero1})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
    data-aos="fade-left"
    data-aos-delay="500"
  />
</div>


        {/* Scroll Down Icon */}
        <div className="absolute bottom-8 w-full flex justify-center items-center">
          <a href="#about">
            <FiArrowDown className="text-3xl text-teal-700 animate-bounce hover:text-purple-700 transition duration-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
