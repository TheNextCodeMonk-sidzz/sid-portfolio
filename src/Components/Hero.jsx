import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sidImage from "../assets/portfolio_pic.png";
import Email_copy from "../assets/copy.svg";

const Hero = ({ onNavigate }) => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  // Function to navigate to contact page
  const goToContact = () => {
    navigate('/contact');
    if (onNavigate) onNavigate();
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
      
      <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 py-5 text-white">
        <div className="max-w-xl w-full lg:w-auto">
          <div className="mb-20 lg:mb-40 space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight">
              Hey, I'm <span className="text-white"> Siddhant !</span> <br />
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl">A <span className="text-gray-400"> Full Stack Developer </span></h2>
            <p className="text-gray-400 mt-5 text-base sm:text-lg lg:text-md">
              I love solving business problems and building clean web experiences.
              I am eager to work under a passionate organizations who loves to make impact and works as a team! 
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10">
            <div className="relative group">
              <button 
                onClick={goToContact}
                className="w-full sm:w-auto  py-2 px-6 rounded-full bg-zinc-800 lg:w-40 text-center h-10 hover:bg-zinc-500 transition-colors cursor-pointer text-base"
              >
                Contact Me
              </button>
              
              
            </div>

            <div className="relative group">
              <button 
                onClick={copyEmail}
                className="w-full sm:w-auto flex px-4 gap-5 py-2 rounded-full bg-gray-800 lg:w-40 text-center h-10 invert hover:bg-gray-700 transition-colors cursor-pointer justify-center items-center text-base"
              >
                <img src={Email_copy} alt="Copy Email" className="w-5 h-5 lg:-mx-4" />
                <span className="text-center lg:mx-5">Email</span>
              </button>
           
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                siddhantbhujbal18@gmail.com
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>

            <div className="relative group">
              <button 
                onClick={openResume}
                className="w-full sm:w-auto py-2 px-6 rounded-full bg-zinc-800 lg:w-40 text-center h-10 hover:bg-zinc-500 transition-colors cursor-pointer text-base"
              >
                My Resume
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                Check my resume
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 lg:mt-0 lg:ml-10 mb-10 lg:mb-50 lg:mr-10">
          <img
            src={sidImage}
            alt="Siddhant Bhujbal"
            className="rounded-full w-64 h-64 sm:w-72 sm:h-72 lg:w-72 lg:h-72 object-cover border-4 border-gray-700 shadow-xl"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
