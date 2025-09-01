import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sidImage from "../assets/portfolio_pic.png";
import Email_copy from "../assets/copy.svg";

const Hero = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  // Function to navigate to contact page
  const goToContact = () => {
    navigate('/contact');
  };

  const copyEmail = async () => {
    const email = "siddhantbhujbal@gmail.com"; 
    try {
      await navigator.clipboard.writeText(email);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); 
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  
  const openResume = () => {
    const resumeUrl = "/documents/Siddhant_Bhujbal_Java.pdf";
    window.open(resumeUrl, '_blank');
  };

  return (
    <>
      
      {showToast && (
        <div className="fixed top-4 right-4 bg-zinc-800 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300">
          Email copied to clipboard!
        </div>
      )}
      
      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-20  py-5  text-white " style={{backgroundColor: '#121212'}}>
        <div className="max-w-xl">
          <div className="mb-40 space-y-4">
            <h1 className="text-5xl md:text-5xl font-bold leading-tight">
              Hey, I'm <span className="text-white "> Siddhant !</span> <br />
            </h1>
            <h2 className="text-3xl  ">A <span className="text-gray-400"> Full Stack Developer </span></h2>
            <p className="text-gray-400 mt-5 text-lg ">
              I love solving business problems and building clean web experiences.
              I am eager to work under a passionate organizations who loves to make impact and works as a team! 
            </p>
          </div>
          <div className="flex gap-10 flex-col md:flex-row">
            <div className="relative group">
              <button 
                onClick={goToContact}
                className="py-2 rounded-full bg-zinc-800 w-40 text-center h-10 hover:bg-zinc-500 transition-colors cursor-pointer"
              >
                Contact Me
              </button>
              
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                +91 9307670316 
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>

           
            <div className="relative group">
              <button 
                onClick={copyEmail}
                className="flex px-4 gap-5 py-2 rounded-full bg-gray-800 w-40 text-center h-10 invert hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <img src={Email_copy} alt="Copy Email" />
                <span className="text-center">Email</span>
              </button>
           
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                siddhantbhujbal18@gmail.com
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>

         
            <div className="relative group">
              <button 
                onClick={openResume}
                className="py-2 rounded-full bg-zinc-800 w-40 text-center h-10 hover:bg-zinc-500 transition-colors cursor-pointer"
              >
                My Resume
              </button>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Check my resume
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:ml-10 mb-50 mr-10">
          <img
            src={sidImage}
            alt="Siddhant Bhujbal"
            className="rounded-full w-72 h-72 object-cover border-4 border-gray-700 shadow-xl"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
