import React from 'react'
import OtherCard from './OtherCard'
import { avatar,techstack,Bookshelf,Notebook } from '../assets'

const OtherSection = () => {

  const style = {
    paddingBottom: '32px'
  };
  return (
    <div className='w-full space-y-5'>
        <h1 className='text-2xl font-bold text-start text-white'>Get to know me</h1>
            <OtherCard 
              title="About Me"
              image = {avatar}
              description ="Who I am and what I do"
              style={style}
            />
            <OtherCard 
            title= "Tech Stacks"
              image = {techstack}
              description ='The dev tools, apps, and devices I use.'

            />
            <OtherCard 
              title="Bookshelf"
              image={Bookshelf}
              description = "Books I’ve enjoyed reading"
            />
            <OtherCard
              title = "Notebook"
              image={Notebook}
              description="My thoughts, insights, and reflections"
            />
        </div>
  )
}

export default OtherSection