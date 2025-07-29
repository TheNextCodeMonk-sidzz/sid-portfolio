import React from "react";

const Experience_cards = ({ Designation, company, date, summary, tech }) => {
  return (
    <div className="ml-6 my-12">
      <div className="bg-gray-700 p-12 w-205 rounded-xl hover:scale-102 duration-500 transition-all ">
        <div className="mx-2">
          <h1 className="text-2xl font-bold text-white  text-left ">
            {Designation}
          </h1>
        </div>
        <div className="mx-2 mt-2 flex justify-between ">
          <h3 className="  text-gray-300 ">{company} </h3>
          <span className="text-white font-bold text-sm px-2">{date}</span>
        </div>
        <div className="mx-2 my-10 ">
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            {summary.map((point, index) => {
              // Split the first word and the rest
              const [firstWord, ...rest] = point.split(" ");
              return (
                <li key={index} className="text-gray-300 text-sm">
                  <span className="font-bold text-gray-300">{firstWord}</span>{" "}
                  {rest.join(" ")}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mx-4 flex gap-3 ">
          {tech.map((tech) => (
            <div className="w-28 w- h-8 flex justify-center  text-sm py-1 hover:border-white cursor-pointer  border border-transparent transition-all duration-300 hover:scale-110 rounded-full bg-amber-900 ">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience_cards;
