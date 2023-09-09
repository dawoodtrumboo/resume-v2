import React from 'react'
import CustomButton from './CustomButton'

const Intro = ({lightTheme}) => {
  return (
    <div className='mt-[300px] flex flex-col gap-3 mb-[150px] md:gap-8'>
        <h1 className="text-gray-500 font-inter text-6xl font-extrabold">Hi👋<br/> 
        I'm <span className={`${lightTheme?'text-black':'text-white'}`}>Dawood Trumboo</span> </h1>
        <p className=' leading-5 mb-2 md:w-[60%]'>I am a front-end engineer and UI/UX 
        designer helping startups turn their visions into a digital reality. 
        I specialize in designing and building modern mobile and web-based apps.</p>

        <div className='w-full flex flex-col md:flex-row md:gap-3'>
        <CustomButton name="See my resume"/>
        <CustomButton name="Get in touch"/>
        </div>
    </div>
  )
}

export default Intro