import { Calendar, Briefcase, Target, Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function InfoGridSection() {
  const infoData = [
    {
      icon: Calendar,
      title: "Background",
      content: "I've been involved in web development since 2023, focusing on full-stack development and AI/ML. I am currently seeking new opportunities."
    },
    {
      icon: Briefcase,
      title: "Skills",
      content: "React.js, JavaScript, Java, Spring-boot, MySql, Docker, Postgres and AWS."
    },
    {
      icon: Target,
      title: "Interests",
      content: "Exploring new tech, Cloud, DevOps, and AI."
    },
    {
      icon: Heart,
      title: "Hobbies",
      content: "Chess, playing instruments, cooking, and traveling."
    }
  ];

  return (
    <div className="min-h-screen text-white mt-8 lg:mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {infoData.map((item, index) => (
            <div
              key={index}
              className="group bg-zinc-900/50 transition-all duration-300 p-6 lg:p-8 rounded-2xl border border-transparent hover:border-zinc-800"
            >
              {/* Header with Icon and Title */}
              <div className="flex items-center space-x-4 mb-4 lg:mb-6">
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg sm:text-xl lg:text-xl font-semibold text-white">
                  {item.title}
                </h2>
              </div>

              {/* Content */}
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base lg:text-base">
                {item.content}
              </p>
            </div>
          ))}
        </div>
        
        <NavLink to={"/contact"}>
          <div className="mt-12 lg:mt-16 text-center">
            <div className="inline-block px-6 py-3 mt-8 lg:mt-10 bg-zinc-900 rounded-full border border-zinc-800 hover:border-zinc-600 transition-colors duration-300 cursor-pointer">
              <span className="text-zinc-400 text-sm sm:text-base">Want to know more?</span>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}