import React from 'react'
import { logo } from '../assets'

const FooterSection = ({style}) => {
  return (
    <div className='w-full pt-20 relative flex flex-col items-center mb-10'>
        <div style={style} className='h-full absolute transform rotate-180'> </div>
        <div className='text-white mb-10 w-full flex flex-col '>
            <p className='font-semibold mb-5'>Elsewhere</p>
            <p className='font-thin'>Email</p>
            <p className='font-thin'>LinkedIn</p>
            <p className='font-thin'>GitHub</p>
            <p className='font-thin'>Twitter</p>
            <p className='font-thin'>Discord</p>
        </div>

        <div className='text-white mb-20 w-full flex flex-col'>
            <p className='font-semibold mb-5 w-[30px] h-[30px]'>Links</p>
            <p className='font-thin'>About</p>
            <p className='font-thin'>Work</p>
            <p className='font-thin'>Tech Stack</p>
            <p className='font-thin'>Contact</p>
        </div>
        <div className='w-full flex '>
        <img src={logo} className='mb-5'/>
        </div>
        <div className=' w-full flex flex-col '>
        <p className='font-normal text-[#FFFFFF42] '> Thanking for stopping by ッ</p>
        <p className='font-normal text-[#FFFFFF42]'>© 2023 Dawood Trumboo. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default FooterSection