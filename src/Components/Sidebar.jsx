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
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, onClose, isMobile }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`${
        isMobile 
          ? `fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            }`
          : 'fixed top-0 left-0 h-full z-30'
        } w-60 h-screen bg-zinc-800 text-white flex flex-col justify-between p-4 shadow-xl`} 
        style={{backgroundColor: '#1C1C1C'}}
      >
        
        {/* Close button for mobile - positioned to not overlap */}
        {isMobile && (
          <button 
            onClick={onClose}
            className="lg:hidden absolute top-3 right-3 p-2 text-white hover:bg-zinc-700 rounded-lg transition-colors duration-200 z-10"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        <div className="flex-1">
          {/* Profile Section - with proper spacing to avoid overlap */}
          <div className={`flex items-center gap-3 mb-8 ${isMobile ? 'mt-8' : 'mt-3'}`}>
            <img 
              src={sidImage} 
              alt="Siddhant Bhujbal" 
              className="w-12 h-12 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-zinc-600 flex-shrink-0" 
            />
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-bold text-white truncate">Siddhant Bhujbal</h1>
              <p className="text-sm text-gray-400 truncate">Software Developer</p>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="space-y-2 mb-8">
            <MenuItem 
              link="/" 
              icon={home} 
              label="Home" 
              onClick={onClose}
              isActive={location.pathname === "/"}
            />
            <MenuItem 
              link="/experience" 
              icon={experience} 
              label="Experience" 
              onClick={onClose}
              isActive={location.pathname === "/experience"}
            />
            <MenuItem 
              link="/projects" 
              icon={projects} 
              label="Projects" 
              onClick={onClose}
              isActive={location.pathname === "/projects"}
            />
            <MenuItem 
              link="/skills" 
              icon={skills} 
              label="Skills" 
              onClick={onClose}
              isActive={location.pathname === "/skills"}
            />
            <MenuItem 
              link="/about" 
              icon={about} 
              label="About" 
              onClick={onClose}
              isActive={location.pathname === "/about"}
            />
            <MenuItem 
              link="/contact" 
              icon={contact} 
              label="Contact" 
              onClick={onClose}
              isActive={location.pathname === "/contact"}
            />
          </nav>

          {/* Social Links */}
          <div className="mt-auto lg:mt-30">
            <h2 className="text-sm font-semibold mb-4 px-3 uppercase text-gray-500 tracking-wider">Connect</h2>
            <div className="space-y-3">
              <SocialIcon 
                link={"https://www.linkedin.com/in/siddhantbhujbal1/"} 
                icon={linkedin} 
                label="LinkedIn" 
              />
              <SocialIcon 
                link={"https://github.com/TheNextCodeMonk-sidzz"} 
                icon={github} 
                label="GitHub" 
              /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ icon, label, link, onClick, isActive }) => (
  <NavLink 
    to={link} 
    className={`flex items-center gap-3 text-sm px-3 py-3 rounded-lg transition-all duration-200 group ${
      isActive 
        ? 'bg-zinc-700 text-white border-l-4 border-white' 
        : 'text-gray-300 hover:bg-zinc-700 hover:text-white'
    }`}
    onClick={onClick}
  >
    <img 
      src={icon} 
      alt={`${label} icon`} 
      className={`w-5 h-5 transition-all duration-200 ${
        isActive ? 'invert brightness-200' : 'invert opacity-70 group-hover:opacity-100'
      }`} 
    />
    <span className="font-medium">{label}</span>
  </NavLink>
);

export default Sidebar;
