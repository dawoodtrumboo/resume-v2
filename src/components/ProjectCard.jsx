import React from 'react'
import { logobox } from '../assets'

const ProjectCard = (props) => {

  
  return (
    <div className="flex w-[99%] px-[24px] py-[32px] flex-col items-start space-y-4 rounded-2xl border border-gray-700">
    <div className='bg-gradient-to-br from-gray-700 to-gray-900 rounded-[10px]'>
    <img src={props.image} className='w-[40px] m-2 '/>
    </div>
    
    <h1 className='text-lg font-extrabold text-white'>{props.title}</h1>
    <p className=' pb-10 text-sm font-normal tracking-tighter'>{props.description}</p>
    <h1 className='text-lg font-normal text-white'>Explore</h1>
</div>
  )
}

export default ProjectCard