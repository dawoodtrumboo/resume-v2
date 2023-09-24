import React from 'react'
import { CustomButton, FooterSection, Intro, OtherSection, ProjectSection} from '../components';
import Navbar from '../components/Navbar';

const LandingPage = (props) => {
  return (
    <>
        
    
     <Intro 
     lightTheme = {props.lightTheme}
     />
     <ProjectSection
     lightTheme = {props.lightTheme}
     />
     <OtherSection
        lightTheme = {props.lightTheme}
     />  
     <div className='mt-10 w-full flex flex-col items-center mb-10 md:flex-row md:justify-between md:mt-[100px]'>
      <div className='flex flex-col justify-center items-center md:items-start '>
      <h1 className={`text-2xl font-extrabold  mb-2 ${props.lightTheme ? 'text-black' : 'text-white'} `}> Let's Work Together</h1>
      <p className='text-sm font-normal tracking-tighter text-center mb-5 md:w-2/3 md:text-start'>Want to discuss an opportunity to create something great? I’m ready when you are.</p>
      </div>
      <CustomButton name="Get in touch"
      />
     </div>

     <hr className='w-[200%] border-gray-600'  />
     
     <FooterSection 
     style={props.gradient}
     lightTheme = {props.lightTheme}
     />
     
    </>
  )
}

export default LandingPage