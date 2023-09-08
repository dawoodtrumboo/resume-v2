import React from 'react'
import ProjectCard from './ProjectCard'
import {projectData} from '../constants/projects'

const ProjectSection = () => {
  return (
    <div className='w-full space-y-4 mb-10'>
        <h1 className='text-2xl text-white font-bold text-start '>Projects</h1>
        
        {projectData.map((project,index) => (
          <ProjectCard
          key={index}
          title={project.title}
          description= {project.description}
          // imageSrc={require(`../assets/${project.img}`)}
          image={project.image}
          />
        ))}
       
    </div>
  )
}

export default ProjectSection