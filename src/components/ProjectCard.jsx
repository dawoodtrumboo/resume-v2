import React from 'react'

const ProjectCard = () => {
  return (
    <div class="flex w-[99%] px-[24px] py-[32px] flex-col items-start space-y-4 rounded-2xl border border-gray-700">
    <img src='#'/>
    <h1 className='text-lg font-extrabold text-white'>Subbi –– The free subscriptions manager</h1>
    <p className=' pb-10 text-sm font-normal tracking-tighter'>Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions 
        and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills 
        like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.</p>
    <h1 className='text-lg font-normal text-white'>Explore</h1>
</div>
  )
}

export default ProjectCard