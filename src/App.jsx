import React from 'react'
import { gradient } from './assets'

const App = () => {
  const style = {
    width: '1500px',
    height: '550px',
    backgroundImage: `url(${gradient})`, // Use the imported gradient SVG
    backgroundSize: 'cover',
   
  };
  
  return (
    <div className='w-full h-screen bg-black flex flex-col items-center'>
     <div style={style}>  </div>

      </div>
    
  )
}

export default App