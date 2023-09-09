import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { logo } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faXTwitter, faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({lightTheme,handleTheme}) => {

  const isWideScreen = useMediaQuery({minWidth: 1000});
  const isTabScreen = useMediaQuery({minWidth: 768});
  return (
    <div className='p-5 md:w-full md:pt-[50px] md:p-0 z-10'>
      {
       isWideScreen ? ( <div className={`flex w-1024 h-[60px] p-[16px] justify-between items-center 
        rounded-lg backdrop-blur-sm ${lightTheme?'text-[#181818] border border-solid border-[#e0e0e0] border-opacity-25 bg-white bg-opacity-25':'text-white bg-gray-800 bg-opacity-30'} `}>
        <img src={logo} />
        <div className='flex gap-8 w-2/4 ml-[100px] '>
          <span>About</span>
          <span>Work</span>
          <span>Notebook</span>
          <span>Contact</span>
          <span>More</span>
        </div>
        <div className='flex w-3/4 justify-end gap-[20px] items-center'>
        
        <FontAwesomeIcon icon={faLinkedin} style={{ color: lightTheme ? "#181818" : "#ffffff" }} size='lg'/>
        <FontAwesomeIcon icon={faXTwitter} style={{ color: lightTheme ? "#181818" : "#ffffff" }} size='lg' />
        <FontAwesomeIcon icon={faGithub} style={{ color: lightTheme ? "#181818" : "#ffffff" }} size='lg' />
        <span className='text-[25px] mb-1 font-thin'>|</span>
       <FontAwesomeIcon icon={faSun} style={{ color: lightTheme ? "#181818" : "#ffffff" }} size='lg' onClick={handleTheme}/>
        </div>
        </div> ): isTabScreen ? (
        <div className='flex w-1024 h-[60px] p-[16px] justify-between items-center 
        rounded-lg bg-gray-800 bg-opacity-30 backdrop-blur-sm'>
        <img src={logo} />
        <div className='flex gap-4 w-2/4 m-[120px] '>
          <span>About</span>
          <span>Work</span>
          <span>Notebook</span>
          <span>Contact</span>
          <span>More</span>
        </div>
        <div className='flex w-3/4 justify-end gap-[20px] items-center'>
        
        <FontAwesomeIcon icon={faLinkedin} style={{ color: lightTheme ? "#181818" : "#ffffff" }} size='lg'/>
        <FontAwesomeIcon icon={faXTwitter} style={{ color: lightTheme ? "#181818" : "#ffffff" }} size='lg' />
        <FontAwesomeIcon icon={faGithub} style={{ color: lightTheme ? "#181818" : "#ffffff" }} size='lg' />
        </div>
        </div> 
        ) : (
        <img src={logo} />
        )
        
        
        
}
    </div>
  )
}

export default Navbar
