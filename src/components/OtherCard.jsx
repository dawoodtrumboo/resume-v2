import { useState } from "react"
import React from 'react'

const OtherCard = ({image,title,description,style,lightTheme}) => {
  const [lightMode, setLightMode] = useState(false)

  const toggleLightMode = () =>{
    console.log("hi");
    setLightMode(!lightMode);
  };
  return (
    <div className={`flex w-[99%] md:h-[380px]  pt-[32px] flex-col items-center space-y-1 rounded-2xl border overflow-hidden ${lightTheme ? 'bg-[#F6F6F6]  border-gray-300' : 'bg-[#181818]  border-gray-700'}`}>
    <h1 className={`text-2xl font-extrabold ${lightTheme ? 'text-black' : 'text-white'}`} onClick={toggleLightMode}>{title}</h1>
    <p className=' pb-10 text-sm font-normal tracking-tighter overflow-hidden text-gray-500 truncate'>{description}</p>
    <div className='w-full flex justify-center '>
    <img src={image} style={style}/>
    </div>
</div>
  )
}

export default OtherCard