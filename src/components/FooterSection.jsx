import React from 'react'
import { logo } from '../assets'

const FooterSection = ({style,lightTheme}) => {
  return (
    <div className={`w-full pt-20 relative flex flex-col items-center mb-10 md:flex-row-reverse md:justify-end `}>
        <div style={style} className='h-full absolute transform rotate-180'> </div>
        <div className='w-full md:flex md:flex-row-reverse md:w-1/2 md:pr-6'>
        <div className={` mb-10 w-full md:w-1/3  flex flex-col md:items-end md:pr-6 ${lightTheme?'text-black':'text-white'} `}>
            <p className='font-semibold w-1/3 mb-5'>Elsewhere</p>
            <p className='font-thin w-1/3'>Email</p>
            <p className='font-thin w-1/3'>LinkedIn</p>
            <p className='font-thin w-1/3'>GitHub</p>
            <p className='font-thin w-1/3'>Twitter</p>
            <p className='font-thin w-1/3'>Discord</p>
        </div>

        <div className={`mb-20 md:mb-10  w-full md:w-2/3  flex flex-col md:items-end ${lightTheme?'text-black':'text-white'} `}>
            <p className='font-semibold w-[40%] mb-5 '>Links</p>
            <p className='font-thin w-[40%]'>About</p>
            <p className='font-thin w-[40%]'>Work</p>
            <p className='font-thin w-[40%]'>Tech Stack</p>
            <p className='font-thin w-[40%]'>Contact</p>
            <p className='font-thin w-[40%]'>Back to Top</p>
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