import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiSettings, FiPenTool, FiLayers } from "react-icons/fi";
import ContactFormModal from "./ContactMe";

const Services = () => {
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
    <section className="relative w-full bg-gradient-to-r from-pink-50 via-teal-50 to-indigo-100 py-20 overflow-hidden" id="services">
      
      <div className="absolute bottom-0 left-0 w-full z-0 opacity-25">
        <svg
          className="wave-background"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          fill="none"
        >
          <path
            fill="url(#wave-gradient)"
            d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,144C672,181,768,235,864,256C960,277,1056,267,1152,224C1248,181,1344,107,1392,75.3L1440,43L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" /> {/* Blue */}
              <stop offset="100%" stopColor="#EC4899" /> {/* Pink */}
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2
            className="text-5xl font-extrabold pb-20 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-teal-600 to-indigo-600 drop-shadow-xl"
            data-aos="fade-up"
          >
            My Services
          </h2>
          <p
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            I bring ideas to life with sleek designs, cutting-edge technology,
            and user-first principles. Here's how I can elevate your vision:
          </p>
        </div>

        
        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          
          <div
            className="relative group p-8 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-4 hover:rotate-2 hover:bg-gradient-to-br from-teal-500 to-blue-600 hover:text-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon mb-6 text-teal-600 text-6xl flex justify-center group-hover:text-white group-hover:rotate-180 transition-transform duration-500">
              <FiSettings />
            </div>
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4 group-hover:text-white transition-colors duration-300">
              UI/UX Design
            </h3>
            <p className="text-center text-gray-600 group-hover:text-white transition-colors duration-300">
              Designing visually appealing and highly functional user
              interfaces for web and mobile apps.
            </p>
          </div>

          
          <div
            className="relative group p-8 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-4 hover:rotate-2 hover:bg-gradient-to-br from-pink-500 to-orange-600 hover:text-white"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon mb-6 text-pink-600 text-6xl flex justify-center group-hover:text-white group-hover:rotate-180 transition-transform duration-500">
              <FiPenTool />
            </div>
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4 group-hover:text-white transition-colors duration-300">
              Visual Design
            </h3>
            <p className="text-center text-gray-600 group-hover:text-white transition-colors duration-300">
              Creating eye-catching visuals and prototypes that perfectly align
              with brand aesthetics.
            </p>
          </div>

          
          <div
            className="relative group p-8 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-4 hover:rotate-2 hover:bg-gradient-to-br from-blue-500 to-pink-600 hover:text-white"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="icon mb-6 text-blue-600 text-6xl flex justify-center group-hover:text-white group-hover:rotate-180 transition-transform duration-500">
              <FiLayers />
            </div>
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4 group-hover:text-white transition-colors duration-300">
              Wireframing & Prototyping
            </h3>
            <p className="text-center text-gray-600 group-hover:text-white transition-colors duration-300">
              Building detailed wireframes and interactive prototypes to ensure
              seamless collaboration and execution.
            </p>
          </div>
        </div>

        
        <div className="text-center mt-20">
        <a
  href="#contact"
  className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-teal-500 to-purple-600 rounded-full shadow-xl hover:scale-110 hover:translate-y-1 transition-all duration-300 ease-in-out transform z-10"
  data-aos="fade-up"
  data-aos-delay="700"
  onClick={handleOpenModal}
>
  Let’s Build Something Amazing
</a>

        </div>
        <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  );
};

export default Services;
