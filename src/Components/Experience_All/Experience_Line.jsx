import React from 'react'
import Experience_cards from './Experience_cards'

const Experience_data=[
    {
        Designation: 'Associate Software Engineer',
        Company_Name:'Betsol ',
        Date : '2023-24',
        Summary:["Ownership : Developed frontend components in a cloud-based backup product using React and Typescript , improving load time by 35% and reducing user-reported UI bugs by 60%.","Recovery : Worked on the Disaster Recovery feature of BETSOL's core Backup and Recovery product, building UI components and resolving critical bugs to ensure smooth and reliable restore workflows.","Performance : Developed and maintained responsive, high-performance front-end applications using React.js, Tailwind CSS, and JavaScript, enhancing user experience and accessibility","Contribution : End-to-end development lifecycle, from planning and design to deployment and post-release improvements","Integration : Worked with REST APIs, integrating data from back-end services to build dynamic and scalable components","Collaboration : Cross-functional teams such as designers, product managers, and QA to ensure timely and quality product delivery","Actively participated in code reviews, helping elevate team code standards and maintaining consistency across the codebase","Learnings : Applied agile methodologies, participated in daily stand-ups, sprint planning, and retrospectives"],
        tech_used:['react.js','Java', 'JavaScript', 'Django', 'Python', 'SQL', 'REST APIs']

    },
    {
        Designation: 'Associate Software Engineer Intern',
        Company_Name:'Stack Nexus Technologies ',
        Date:'2021-2022',
        Summary:["Development : Using React.js, Tailwind CSS, and JavaScript, contributing to UI components and feature implementations for internal tools","Learnings : Hands-on exposure to AI integration in frontend applications, particularly around incorporating machine learning-driven recommendations into user interfaces","Contribution : Crop Land Detection AI project, focusing on building intuitive and responsive user interfaces using React.js and Tailwind CSS","Integration : AI model outputs into the frontend, allowing real-time visualization of crop land boundaries and classifications from satellite imagery","Enhancement : Reused UI components for displaying geospatial data, improving modularity and responsiveness across devices","TeamPlayer :  Worked closely with the AI/ML team to ensure smooth data flow between backend models and UI components"],
        tech_used:['react.js','Java']

    }
]

const Experience_Line = () => (
  <div className="relative pl-14">                
    
    <div className="absolute left-0 top-0 h-full w-1 bg-white" />

    
    <div className="flex flex-col gap-12">
      {Experience_data.map((exp, idx) => (
        <div key={idx} className="flex items-center">
            
          <div className="absolute left-1 w-20 h-1 bg-white rounded-full -ml-[6px] z-10"></div>
          
          <div className="absolute left-0 w-4 h-4 bg-white rounded-full -ml-[6px] z-10"></div>
          <div className="w-18 h-1 bg-white " />

         
          <Experience_cards
            Designation={exp.Designation}
            company={exp.Company_Name}
            date={exp.Date}
            summary={exp.Summary}
            tech={exp.tech_used}
          />
        </div>
      ))}
    </div>
  </div>
);
export default Experience_Line