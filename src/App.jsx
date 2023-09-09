import React,{useState} from 'react'
import { gradient } from './assets'
import Navbar from './components/Navbar';
import { CustomButton, FooterSection, Intro, OtherSection, ProjectSection } from './components';

const App = () => {
  
  const [lightMode, setLightMode] = useState(false)

  const toggleLightMode = () =>{
    setLightMode(!lightMode);
    
  };

  
  const style = {
    width: '1500px',
    height: '550px',
    backgroundImage: `url(${gradient})`, // Use the imported gradient SVG
    backgroundSize: 'cover',
   
  };
  
  return (
    <div className={`w-full flex flex-col items-center px-5 overflow-hidden md:px-[50px] ${lightMode? 'bg-white':'bg-black'}`}>
      <Navbar
      handleTheme ={ toggleLightMode}
      lightTheme = {lightMode}
      />
     <div style={style} className='absolute'> 
     </div>
     <Intro 
     lightTheme = {lightMode}
     />
     <ProjectSection
     lightTheme = {lightMode}
     />
     <OtherSection
     lightTheme = {lightMode}
     />  
     <div className='mt-10 w-full flex flex-col items-center mb-10 md:flex-row md:justify-between md:mt-[100px]'>
      <div className='flex flex-col justify-center items-center md:items-start '>
      <h1 className={`text-2xl font-extrabold  mb-2 ${lightMode ? 'text-black' : 'text-white'} `}> Let's Work Together</h1>
      <p className='text-sm font-normal tracking-tighter text-center mb-5 md:w-2/3 md:text-start'>Want to discuss an opportunity to create something great? I’m ready when you are.</p>
      </div>
      <CustomButton name="Get in touch"
      />
     </div>

     <hr className='w-[200%] border-gray-600'  />

     <FooterSection style={style}
     lightTheme = {lightMode}
     />
     

     
      </div>
    
  )
}

export default App