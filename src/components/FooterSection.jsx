import React from 'react'
import { logo } from '../assets'

const FooterSection = ({style,lightTheme}) => {
  return (
    <div className={`w-full pt-20 relative flex flex-col items-center mb-10 md:flex-row-reverse md:justify-end `}>
        <div style={style} className='z-0 h-full absolute transform rotate-180'> </div>
        <div className='z-10 w-full md:flex md:flex-row-reverse md:w-1/2 md:pr-6'>
        <div className={` mb-10 w-full md:w-1/3  flex flex-col md:items-end md:pr-6 ${lightTheme?'text-black':'text-white'} `}>
            <p className='font-semibold w-1/3 mb-5'>Elsewhere</p>
            <a className='font-thin w-1/3' href='mailto:idawoodtrumboo@gmail.com'>Email</a>
            <a href='https://www.linkedin.com/in/dawoodtrumboo/' target='_blank' className='font-thin w-1/3'>LinkedIn</a>
            <a href='https://github.com/dawoodtrumboo' target='_blank' className='font-thin w-1/3'>GitHub</a>
            <a href='https://github.com/dawoodtrumboo' target='_blank' className='font-thin w-1/3'>Twitter</a>
            <a href='https://discord.gg/FS2Er2x' target='_blank' className='font-thin w-1/3'>Discord</a>
        </div>

        <div className={`mb-20 md:mb-10  w-full md:w-2/3  flex flex-col md:items-end ${lightTheme?'text-black':'text-white'} `}>
            <p className='font-semibold w-[40%] mb-5 '>Links</p>
            <a className='font-thin w-[40%]'>About</a>
            <a className='font-thin w-[40%]'>Work</a>
            <a className='font-thin w-[40%]'>Tech Stack</a>
            <a className='font-thin w-[40%]'>Contact</a>
            <a href='#' className='font-thin w-[40%]'>Back to Top</a>
        </div>
        </div>
        <div className='w-full md:space-y-8 md:w-1/2'>
        <div className='w-full flex  '>
        <img src={logo}/>
        </div>
        <div className={` w-full flex flex-col ${lightTheme?'text-[#FFFFFF42]':'text-white'}`}>
        <p className='font-normal'> Thanking for stopping by ッ</p>
        <p className='font-normal '>© 2023 Dawood Trumboo. All Rights Reserved.</p>
        </div>
        </div>
    </div>
  )
}

export default FooterSection