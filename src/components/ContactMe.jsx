import React, { useState } from "react";
import PropTypes from "prop-types"; 
import { FiXCircle } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactFormModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  
  const socialLinks = [
    { icon: <FaInstagram />, url: "https://www.instagram.com/love._graphics/" },
    { icon: <FaXTwitter />, url: "https://x.com/PriyanshiPraj10" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/priyanshii12" },
    { icon: <FaGithub />, url: "https://github.com/Priyanshi-UI-UX/" },
    { icon: <FaBehance />, url: "https://www.behance.net/priyansprajapa31" },
  ];

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = { Name: name, Email: email, Message: message };

    try {
      await axios.post(
        `https://api.sheetbest.com/sheets/cc0b0229-7b6e-47fc-8c7e-a8c032222efb`,
        data
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Your message has been sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error sending message:", error.message);
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-6"
          onClick={handleBackdropClick}
        >
          <div className="w-full max-w-lg bg-blue-50 p-8 rounded-lg shadow-xl relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl text-indigo-600 hover:text-indigo-800 transition-transform duration-200"
              aria-label="Close modal"
            >
              <FiXCircle />
            </button>

            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
              Contact Me
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-lg text-gray-700 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full p-3 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                  aria-label="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-lg text-gray-700 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full p-3 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                  aria-label="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-lg text-gray-700 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  className="w-full p-3 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                  aria-label="Enter your message"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full shadow-lg hover:opacity-90"
                  disabled={loading}
                  aria-label="Submit form"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>

            <div className="flex justify-center gap-6 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-2xl transition-transform hover:scale-110"
                  aria-label={`Visit ${link.url}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      
    </>
  );
};


ContactFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContactFormModal;
