import React from 'react'

const OtherCard = ({image,title,description,style}) => {
  return (
    <div class="flex w-[99%]  pt-[32px] flex-col items-center space-y-1 rounded-2xl border border-gray-700">
    <h1 className='text-2xl font-extrabold text-white'>{title}</h1>
    <p className=' pb-10 text-sm font-normal tracking-tighter overflow-hidden text-gray-500 truncate'>{description}</p>
    <div className='w-full flex justify-center '>
    <img src={image} style={style}/>
    </div>
</div>
  )
}

export default OtherCard