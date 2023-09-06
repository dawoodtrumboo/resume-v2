import React from 'react'
import CustomButton from './CustomButton'

const Intro = () => {
  return (
    <div className='mt-[300px] flex flex-col gap-3 mb-[150px]'>
        <h1 className="text-gray-500 font-inter text-6xl font-extrabold">Hi👋<br/> 
        I'm <span className='text-white'>Dawood Trumboo</span> </h1>
        <p className=' leading-5 mb-2'>I am a front-end engineer and UI/UX 
        designer helping startups turn their visions into a digital reality. 
        I specialize in designing and building modern mobile and web-based apps.</p>

        <CustomButton name="See my resume"/>
        <CustomButton name="Get in touch"/>
    </div>
  )
}

export default Intro