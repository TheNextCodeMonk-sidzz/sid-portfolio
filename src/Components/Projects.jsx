import React from 'react'
import Project_card from './Project_card';

const projects = [
  {
    title: "FlowMate",
    description: "Task management & productivity tool built with Next.js.",
    image: "/images/flowmate.png",
    github: "https://github.com/your-repo/flowmate"
  },
  {
    title: "Prompt Genie",
    description: "AI-powered prompt generator for developers and writers.",
    image: "/images/promptgenie.png",
    github: "https://github.com/your-repo/promptgenie"
  },
  {
    title: "DevDash",
    description: "A clean developer dashboard built with Tailwind and React.",
    image: "/images/devdash.png",
    github: "https://github.com/your-repo/devdash"
  },
  {
    title: "Portflow",
    description: "Minimal personal portfolio powered by Astro and GSAP.",
    image: "/images/portflow.png",
    github: "https://github.com/your-repo/portflow"
  },
  {
    title: "NodeNews",
    description: "A news app using Express.js and NewsAPI.",
    image: "/images/nodenews.png",
    github: "https://github.com/your-repo/nodenews"
  },
  {
    title: "WeatherVerse",
    description: "Weather dashboard using React and OpenWeatherMap.",
    image: "/images/weatherverse.png",
    github: "https://github.com/your-repo/weatherverse"
  },
];

const Projects = () => {
  return (
    <section className='mx-20 py-10'>
        <div>
            <h1 className='text-4xl text-white text-sans font-bold'>Projects</h1>
            <p className='text-base text-gray-400 text-sans mt-3'>A showcase of what I’ve built, learned, and launched ...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {projects.map((project) => (
          <Project_card key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects