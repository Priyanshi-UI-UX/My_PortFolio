import React from "react";
import Hero from "./components/Home";  // Default opening page
import About from "./components/About";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Thanks from "./components/Thanks";



const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Portfolio/>
    <Thanks/>
    <ToastContainer/>
    
    </>
  );
};

export default App;
