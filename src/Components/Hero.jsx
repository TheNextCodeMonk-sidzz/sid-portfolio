import React from "react";
import sidImage from "../assets/portfolio_pic.png";
import Email_copy from "../assets/copy.svg";

const Hero = () => {
  return (
    // <div >
    //     <img src={sidImage} alt="Siddhant Bhujbal" className='flex flex-col  w-60 h-50 justify-center ml-100'/>
    //     <h1>Hi, I'm Siddhant Bhujbal, a software developer </h1>
    //     <p>I am a frontend developer with 1+ years of experience in Product based company. I focus on React.js, javaScript and my problem solving language is Python  </p>
    //     <div>connect</div>
    //     <div>Resume</div>
    // </div>
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-20  py-5 bg-black text-white ">
      <div className="max-w-xl">
        <div className="mb-40 space-y-4">
          <h1 className="text-5xl md:text-5xl leading-tight">
            Hi, I'm <span className="text-white font-robota"> Siddhant !</span> <br />
          </h1>
          <h2 className="text-3xl  ">A <span className="text-gray-400"> Front-End Developer </span></h2>
          <p className="text-gray-400 mt-5 text-lg ">
            I am a developer who loves building clean web experiences and
            exploring new tech mostly found coding with snacks.
          </p>
        </div>
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="  py-2 rounded-full bg-gray-800 w-40 text-center h-10  ">
            Contact Me
          </div>
          <div className=" flex px-4 gap-5  py-2 rounded-full bg-gray-800 w-40 text-center h-10  invert ">
            <img src={Email_copy} alt="Copy Email" />
            <span className="text-center">Email</span>
          </div>
          <div className="py-2 rounded-full bg-gray-800 w-40 text-center h-10 ">
            My Resume
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
  );
};

export default Hero;
