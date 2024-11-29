import React from "react";
import { FiX } from "react-icons/fi";
import { FaGraduationCap, FaCertificate, FaLaptopCode, FaUsers } from "react-icons/fa";

const Skills = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 w-full z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-lg"
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-[full] max-w-7xl h-[85%] sm:h-[70%] bg-gray-900 text-gray-200 rounded-xl shadow-[0_0_15px_5px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_10px_rgba(0,255,255,0.8)] transform scale-95 hover:scale-100 transition-all duration-500  overflow-y-auto sm:overflow-hidden"
      >
        
        <button
          className="absolute top-4 right-4 text-teal-400 hover:text-red-500 transition-transform transform hover:rotate-90 duration-300 text-xl"
          onClick={onClose}
        >
          <FiX />
        </button>

        
        <div className="flex flex-col sm:flex-row h-full">
          {[ // Sections Array
            {
              title: "Educational History",
              icon: <FaGraduationCap />,
              items: [
                "B.Tech (CSE), KIPM College of Engineering & Technology (2025)",
                "Diploma (IT), Govt. Girls Polytechnic, Gorakhpur (2022)",
              ],
            },
            {
              title: "Certifications",
              icon: <FaCertificate />,
              items: [
                "Google UX Design Certification",
                "Responsive Web Design - freeCodeCamp",
              ],
            },
            {
              title: "Skills",
              icon: <FaLaptopCode />,
              items: [
                "UI/UX Design: Figma, Adobe XD",
                "Prototyping & Wireframing",
                "User Research & Usability Testing",
                "Frontend: HTML, CSS, React.js",
                "Accessibility & Responsive Design",
              ],
            },
            {
              title: "Extra-Curricular Activities",
              icon: <FaUsers />,
              items: ["Placement Sub-Coordinator","Magazine Team Head", "Quiz Competition Head"],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="flex-1 p-6 border-b sm:border-b-0 sm:border-r border-gray-800 last:border-r-0"
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-teal-300 text-3xl animate-bounce"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: "2s",
                  }}
                >
                  {section.icon}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-teal-300 hover:underline hover:underline-offset-4 transition duration-300">
                  {section.title}
                </h3>
              </div>
              <ul className="text-gray-300 space-y-4">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-teal-400 hover:translate-x-1 transition-all duration-300 text-sm sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
        <div className="absolute inset-0 border-2 w-fit border-teal-400 rounded-xl animate-pulse opacity-40"></div>
      </div>
    </div>
  );
};

export default Skills;
