import React from "react";
import home from "../assets/house.svg";
import experience from "../assets/briefcase-business.svg";
import projects from "../assets/pencil.svg";
import skills from "../assets/layers-2.svg";
import contact from "../assets/send.svg";
import about from "../assets/user-round.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github (1).svg";
import sidImage from "../assets/portfolio_pic.png";
import SocialIcon from "./SocialIcon";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-zinc-800 text-white fixed top-0 left-0 flex flex-col justify-between p-4">
      <div>
        <div className="flex items-center gap-3 mb-8 mt-3">
          {/* <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-xl font-bold ">
            SB
          </div> */}
          <img src={sidImage} alt="Siddhant Bhujbal" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h1 className="text-lg font-bold">Siddhant Bhujbal</h1>
            <p className="text-sm text-gray-400">Software Developer</p>
          </div>
        </div>
        <nav className="space-y-4 ">
          <MenuItem link="/" icon={home} label="Hero" />
          <MenuItem link="/experience" icon={experience} label="Experience" />
          <MenuItem link="/projects" icon={projects} label="Projects" />
          <MenuItem link="/skills" icon={skills} label="Skills" />
          <MenuItem link="/about" icon={about} label="About" />
          <MenuItem link="/contact" icon={contact} label="Contact" />
          
        </nav>


        <div className="mt-30 ">
            <h2 className="text-lg mb-2 px-3 uppercase text-gray-500 ">connect </h2>
            <div className="mt-4 space-y-4">
            {/* <MenuItem icon={linkedin}  label="LinkedIn" />
            <MenuItem icon={github} label="GitHub" /> */}
            <SocialIcon link={"https://www.linkedin.com/in/siddhantbhujbal1/"} icon={linkedin} label="LinkedIn" />
            <SocialIcon link={"https://github.com/TheNextCodeMonk-sidzz"} icon={github} label="GitHub" />
            
            </div>
        </div>
        {/* <div className="mt-6 space-y-4">
          <h2 className="text-lg text-gray-500 uppercase mb-2">Connect</h2>
          <div className=" flex item-center gap-3">
            <a
              href="https://www.linkedin.com/in/siddhantbhujbal1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-7 h-7 invert hover:scale-110 transition"
              />
            </a>
            <a
              href="https://github.com/TheNextCodeMonk-sidzz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-7 h-7 invert hover:scale-110 transition"
              />
            </a> */}
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={require('../assets/twitter.svg')} alt="Twitter" className="w-7 h-7 invert hover:scale-110 transition" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={require('../assets/instagram (1).svg')} alt="Instagram" className="w-7 h-7 invert hover:scale-110 transition" />
                </a> */}
          {/* </div>
        </div> */}
      </div>
    </div>
  );
};
const MenuItem = ({ icon, label ,link}) => (
  <NavLink to={link} className="flex items-center gap-3 text-sm hover:bg-gray-800 px-2 py-1 rounded cursor-pointer transition">
    <img src={icon} alt={`${label} icon`} className="w-10 h-7 invert" />
    <span>{label}</span>
  </NavLink>
);




export default Sidebar;
