import React from 'react'
import { logobox,arrow } from '../assets'
import { useMediaQuery } from 'react-responsive'


const ProjectCard = (props) => {

  const isWideDevice = useMediaQuery(({minWidth: 600}));

  
  return (
    <div className={`flex w-[99%] px-[24px] py-[32px] md:pb-0 md:pr-0 flex-row items-start space-y-4 rounded-2xl border ${props.lightTheme ? 'bg-[#F6F6F6]  border-gray-300' : 'bg-[#181818]  border-gray-700'} `}>
      <div className='md:space-y-4 space-y-4' >
    <div className='flex justify-center items-center bg-gradient-to-br from-gray-700 to-gray-900 rounded-[10px] w-[60px]'>
    <img src={props.image} className='w-[40px] m-2 p-1'/>
    </div>
    <div className='md:w-[100%] md:space-y-3 '>
    <h1 className={`text-lg font-extrabold ${props.lightTheme ? 'text-black' : 'text-white'}`}>{props.title}</h1>
    <p className=' pb-10 text-sm font-normal tracking-tighter'>{props.description}</p>
    </div>
    <div className='flex w-full gap-2'>
    <a href={props.link}><h1 className={`text-lg font-normal md:pt-[0px] ${props.lightTheme ? 'text-black' : 'text-white'}`}>Explore</h1></a>
    <img src={arrow} className='w-[20px]'/>
    </div>
    </div>
    {isWideDevice ? (<img src={props.background} className='w-[40%]'/>) : ''}
</div>
  )
}

export default ProjectCard