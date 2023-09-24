import React from 'react'
import ProjectCard from '../components/ProjectCard'
import {projectData} from '../constants/projects'
import { star } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FooterSection } from '../components'

const Projects = (props) => {

  return (
    <div className='w-full'>
      <div className='w-full mt-[200px] md:mt-[150px] flex flex-col items-start space-y-2 '>
        <h1  className={`text-[48px] w-2/3 font-bold leading-none  ${props.lightTheme ? 'text-black': 'text-white'}`}>Projects</h1>
        <p>Projects and ideas I’ve worked on</p>
      </div>

      <hr className='w-[200%] border-gray-600 my-[100px] md:my-10 -m-20'  />

      <div className='space-y-4 mb-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-10'>
        {projectData.map((project,index) => (
          <ProjectCard
          key={index}
          background = {project.bg}
          title={project.title}
          description= {project.description}
          link = {project.link}
          image={project.image}
          lightTheme = {props.lightTheme}
          />
        ))}
            <div className={`flex md:justify-center md:items-center  w-[99%] px-[24px] py-[32px] md:pb-0 md:pr-0 flex-row items-start space-y-4 rounded-2xl border-dashed border-2 ${props.lightTheme ? 'bg-[#F6F6F6]  border-gray-300' : 'bg-[#181818]  border-gray-700'} `}>

                <div className='w-full flex flex-col items-center md:pb-10'>
                  <div className='rounded-full border-dotted border-2 p-3 border-gray-500 my-3'>
                  <FontAwesomeIcon icon={faPlus} size='xl' />
                  </div>
                
                    <h1 className='text-lg'>YOUR PROJECT GOES HERE</h1>
                    <p className='text-xs font-thin'>Let’s turn your idea into a visual reality</p>
                    
                </div>
            </div>
        </div>
        <FooterSection
          style={props.gradient}
          lightTheme = {props.lightTheme}
     />
    </div>
  )
}

export default Projects