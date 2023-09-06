import React from 'react'
import { gradient } from './assets'
import Navbar from './components/Navbar';
import { CustomButton, FooterSection, Intro, OtherSection, ProjectSection } from './components';

const App = () => {
  const style = {
    width: '1500px',
    height: '550px',
    backgroundImage: `url(${gradient})`, // Use the imported gradient SVG
    backgroundSize: 'cover',
   
  };
  
  return (
    <div className='w-full bg-black flex flex-col items-center px-5 overflow-hidden'>
      <Navbar/> 
     <div style={style} className='absolute'> 
     </div>
     <Intro />
     <ProjectSection/>
     <OtherSection/>  
     <div className='mt-10 w-full flex flex-col items-center mb-10'>
      <h1 className='text-2xl font-extrabold text-white mb-2'> Let's Work Together</h1>
      <p className='text-sm font-normal tracking-tighter text-center mb-5'>Want to discuss an opportunity to create something great? I’m ready when you are.</p>
      <CustomButton name="Get in touch"/>
     </div>

     <hr className='w-[200%] border-gray-600'  />

     <FooterSection style={style}/>
     

     
      </div>
    
  )
}

export default App