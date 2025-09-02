import React from "react";

const Experience_cards = ({ Designation, company, date, summary, tech, isMobile }) => {
  if (isMobile) {
    // Mobile layout - full width, centered, no timeline positioning
    return (
      <div className="w-full">
        <div className="p-6 w-full rounded-xl hover:scale-[1.02] duration-500 transition-all" style={{backgroundColor: '#1C1C1C'}}>
          <div className="mb-4">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white text-left">
              {Designation}
            </h1>
          </div>
          <div className="mb-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <h3 className="text-gray-300 text-sm sm:text-base">{company}</h3>
            <span className="text-white font-bold text-xs sm:text-sm px-3 py-1 bg-zinc-700 rounded-full self-start sm:self-auto">{date}</span>
          </div>
          <div className="mb-6">
            <ul className="list-disc pl-4 space-y-2 text-gray-300 text-sm sm:text-base">
              {summary.map((point, index) => {
                const [firstWord, ...rest] = point.split(" ");
                return (
                  <li key={index} className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    <span className="font-bold text-gray-300">{firstWord}</span>{" "}
                    {rest.join(" ")}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.map((techItem, index) => (
              <div 
                key={index}
                className="px-3 py-1 flex justify-center items-center text-xs sm:text-sm hover:border-white cursor-pointer border border-transparent transition-all duration-300 hover:scale-110 rounded-full bg-zinc-500 text-white whitespace-nowrap"
              >
                {techItem}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout - original design with timeline positioning
  return (
    <div className="mx-10 my-12">
      <div className="p-12 w-205 rounded-xl hover:scale-102 duration-500 transition-all" style={{backgroundColor: '#1C1C1C'}}>
        <div className="mx-2">
          <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-white text-left">
            {Designation}
          </h1>
        </div>
        <div className="mx-2 mt-2 flex justify-between">
          <h3 className="text-gray-300 text-sm sm:text-base">{company}</h3>
          <span className="text-white font-bold text-sm px-2">{date}</span>
        </div>
        <div className="mx-2 my-10">
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm sm:text-base">
            {summary.map((point, index) => {
              const [firstWord, ...rest] = point.split(" ");
              return (
                <li key={index} className="text-gray-300 text-sm sm:text-base">
                  <span className="font-bold text-gray-300">{firstWord}</span>{" "}
                  {rest.join(" ")}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mx-4 flex gap-3">
          {tech.map((techItem, index) => (
            <div 
              key={index}
              className="w-28 h-8 flex justify-center text-sm sm:text-base py-1 hover:border-white cursor-pointer border border-transparent transition-all duration-300 hover:scale-110 rounded-full bg-zinc-500 text-white"
            >
              {techItem}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience_cards;
