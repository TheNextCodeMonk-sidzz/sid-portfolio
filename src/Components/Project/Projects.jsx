import React from 'react'
import Project_card from './Project_card';
import kardexa from "../../assets/kardexa.png";
import yogaPose from "../../assets/Yoga_Pose_Correctness_detection.jpeg";
import SmartLibrary from "../../assets/Smart_LIbrary.png";
import AimTrainer from "../../assets/Personalized_Aim_Trainer.png";


const projects = [

  {
    title: "Kardexa",
    description: "Kardexa IMS – your all-in-one hub to track and manage inventory.",
    image: kardexa,
    github: "https://github.com/TheNextCodeMonk-sidzz/Kardexa"
  },
  {
    title: "Aim Trainer",
    description: "Personalized & Free Aim training Platform for Gamers",
    image: AimTrainer,
    github: "https://github.com/TheNextCodeMonk-sidzz/Personalized_Aim_Trainer"
  },
  
  {
    title: "Yoga Pose Correctness Detection",
    description: "An AI-powered guide that uses computer vision to provide real-time feedback ",
    image: yogaPose,
    github: "https://github.com/TheNextCodeMonk-sidzz/Self-Yoga-Pose-Correctness-Detection"
  },
  {
    title: "Smart Library",
    description: "A Smart way to Manage your Library",
    image: SmartLibrary,
    github: "https://github.com/TheNextCodeMonk-sidzz/Smart-Library--LMS-"
  },
  
];

const Projects = () => {
  return (
    <section className='mx-20 py-20'>
        <div>
            <h1 className='text-5xl text-white text-sans font-bold'>Projects</h1>
            <p className='text-lg text-gray-400 text-sans mt-4 mb-10'>A showcase of what I’ve built, learned, and launched ...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">
        {projects.map((project) => (
          <Project_card key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects