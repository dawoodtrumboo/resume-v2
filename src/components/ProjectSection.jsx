import React from 'react'
import ProjectCard from './ProjectCard'


const ProjectSection = () => {
  return (
    <div className='w-full space-y-4 mb-10'>
        <h1 className='text-2xl text-white font-bold text-start '>Projects</h1>
        
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
       
    </div>
  )
}

export default ProjectSection