import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Thanks = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-teal-100 via-blue-50 to-indigo-100 overflow-hidden text-gray-800 px-4 sm:px-6 md:px-8">
      {/* Decorative Waves */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-auto opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="url(#wave-gradient)"
            d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,90.7C672,64,768,64,864,74.7C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#800080", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#ff69b4", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Glowing Light Effect at the Top */}
      <div className="absolute top-0 w-full h-20 bg-pink-400 opacity-50 blur-3xl animate-glow"></div>

      {/* Glittery Stars */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="animate-glitter absolute w-1 h-1 bg-white rounded-full blur-sm opacity-80" style={{ top: "30%", left: "40%" }} />
        <div className="animate-glitter absolute w-1.5 h-1.5 bg-yellow-300 rounded-full blur-sm opacity-85" style={{ top: "20%", left: "50%" }} />
        <div className="animate-glitter absolute w-2 h-2 bg-pink-400 rounded-full blur-sm opacity-90" style={{ top: "50%", left: "70%" }} />
        <div className="animate-glitter absolute w-1 h-1 bg-cyan-300 rounded-full blur-sm opacity-80" style={{ top: "80%", left: "30%" }} />
        <div className="animate-glitter absolute w-1 h-1 bg-purple-400 rounded-full blur-sm opacity-85" style={{ top: "60%", left: "80%" }} />
      </div>

      {/* Thank You Message */}
      <div className="text-center space-y-6 z-20">
        <h1 className="relative pb-3 text-4xl sm:text-5xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-teal-500 to-blue-600 animate-fadeIn">
          Thank You for Visiting!
          <span className="absolute -top-3 -left-5 text-yellow-300 animate-glitter">&#10022;</span>
          <span className="absolute -top-8 right-20 text-cyan-400 animate-glitter">&#10022;</span>
          <span className="absolute bottom-12 left-12 text-pink-400 animate-glitter">&#10022;</span>
          <span className="absolute -bottom-13 right-5 text-purple-500 animate-glitter">&#10022;</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto animate-fadeIn">
          I’m so glad you took the time to explore my portfolio. Your visit means a lot to me, 
          and I hope you found something inspiring here. Let’s connect and create something amazing together!
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="mt-16 sm:mt-20 md:mt-24 flex flex-wrap justify-center gap-6 z-20">
        <a
          href="https://www.instagram.com/love._graphics/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:text-purple-600 transition duration-300 transform hover:scale-110 text-3xl md:text-3xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/PriyanshiPraj10"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:text-purple-600 transition duration-300 transform hover:scale-110 text-3xl md:text-3xl"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/priyanshii12"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:text-purple-600 transition duration-300 transform hover:scale-110 text-3xl md:text-3xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Priyanshi-UI-UX/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:text-purple-600 transition duration-300 transform hover:scale-110 text-3xl md:text-3xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.behance.net/priyansprajapa31"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:text-purple-600 transition duration-300 transform hover:scale-110 text-3xl md:text-3xl"
          aria-label="Behance"
        >
          <FaBehance />
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-32 text-center text-gray-500 text-md sm:text-lg z-20">
        © {new Date().getFullYear()} Priyanshi | All Rights Reserved
      </footer>
    </section>
  );
};

export default Thanks;
