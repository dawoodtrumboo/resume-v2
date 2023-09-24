import React,{useState} from 'react'
import { gradient } from './assets'

import { About , LandingPage} from './pages';
import { Navbar } from './components';
import { Router, Route, Routes } from 'react-router-dom';

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
    
    <div className={`w-full  flex flex-col items-center px-5 overflow-hidden md:px-[50px] ${lightMode? 'bg-white':'bg-black'}`}>
      <div style={style} className='absolute'> 
     </div>

     <Navbar
      handleTheme ={toggleLightMode}
      lightTheme = {lightMode}
      />
     <Routes>
        <Route path = '/' element ={
        <LandingPage
          gradient = {style}
          handleTheme ={ toggleLightMode}
          lightTheme = {lightMode}
          />
        } />

        <Route path='/about' element={
          <About
          gradient = {style}
          handleTheme ={ toggleLightMode}
          lightTheme = {lightMode}
          />
        }/>

      </Routes>

     
      </div>
  
  )
}

export default App