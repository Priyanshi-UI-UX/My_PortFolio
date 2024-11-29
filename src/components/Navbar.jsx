import React, { useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiHome, FiUser, FiBriefcase, FiPhone, FiLayers } from "react-icons/fi";
import { PiFileArrowDownDuotone } from "react-icons/pi";
import ContactFormModal from "./ContactMe"; 
import Resume from '../assets/Images/Priyanshi_Prajapati_UIUX_Fresher_Resume.pdf';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: <FiHome /> },
    { name: "About", href: "#about", icon: <FiUser /> },
    { name: "Services", href: "#services", icon: <FiLayers /> },
    { name: "Portfolio", href: "#portfolio", icon: <FiBriefcase /> },
    { name: "Contact", icon: <FiPhone />, onClick: handleOpenModal }, 
    { name: "Download CV", href: Resume, target : "_blank", download:true, icon: <PiFileArrowDownDuotone />}, 
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-16">
          
          <div
            className="text-3xl font-bold bg-gradient-to-r from-purple-700 via-teal-600 to-blue-700 bg-clip-text text-transparent tracking-wide animate-pulse"
            data-aos="zoom-in"
          >
            Priyanshi
          </div>

          
          <div
            className="hidden md:flex items-center space-x-8"
            data-aos="fade-left"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-gray-600 font-medium text-lg transition duration-300 ease-in-out hover:text-teal-600 hover:animate-jiggle"
                onClick={link.onClick} 
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>

          
          <div
            className="md:hidden text-gray-600 text-2xl cursor-pointer"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        
        {navOpen && (
          <div
            className="md:hidden bg-white w-full py-6 flex flex-col space-y-6"
            data-aos="fade-down"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex w-full items-center gap-3 text-gray-800 font-medium text-lg px-4 hover:text-teal-600 hover:bg-teal-50 hover:py-1 transition duration-300 ease-in-out hover:animate-jiggle"
                onClick={link.onClick} 
              >
                {link.icon}
                {link.name}
              </a>
            ))}

            
          </div>
        )}
      </nav>

      
      <ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Navbar;
