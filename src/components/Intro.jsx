import React from 'react'
import CustomButton from './CustomButton'

const Intro = ({lightTheme}) => {
  return (
    <div className='mt-[300px] flex flex-col gap-3 mb-[150px] md:gap-8'>
        <h1 className="text-gray-500 font-inter text-6xl font-extrabold">Hi👋<br/> 
        I'm <span className={`${lightTheme?'text-black':'text-white'}`}>Dawood Trumboo</span> </h1>
        <p className=' leading-5 mb-2 md:w-[60%]'>Reat developer pursuing B.Tech in Computer Science. I am 
        proficient in React, Tailwind CSS, JavaScript, HTML, CSS and Bootstrap and I am committed to pushing
         the boundaries of web development to create human centric services and experiences.</p>

        <div className='w-full flex flex-col md:flex-row md:gap-3'>
        <CustomButton name="See my resume" link="https://drive.google.com/file/d/1-fmKB2xw_9l8F8NhJgUDEJzgLKpwkIOe/view?usp=sharing"/>
        <CustomButton name="Get in touch"/>
        </div>
    </div>
  )
}

export default Intro