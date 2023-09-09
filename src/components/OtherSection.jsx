import React from 'react'
import OtherCard from './OtherCard'
import { avatar,techstack,Bookshelf,Notebook } from '../assets'

const OtherSection = ({lightTheme}) => {

  const style = {
    paddingBottom: '32px'
  };
  return (
    <div className='w-full space-y-5'>
        <h1 className='text-2xl font-bold text-start text-white'>Get to know me</h1>
        <div className='space-y-5 md:grid md:grid-cols-2 md:gap-5 md:space-y-0'>
            <OtherCard 
              lightTheme = {lightTheme}
              title="About Me"
              image = {avatar}
              description ="Who I am and what I do"
              style={style}
            />
            <OtherCard 
            lightTheme = {lightTheme}
            title= "Tech Stacks"
              image = {techstack}
              description ='The dev tools, apps, and devices I use.'

            />
            <OtherCard 
            lightTheme = {lightTheme}
              title="Bookshelf"
              image={Bookshelf}
              description = "Books I’ve enjoyed reading"
            />
            <OtherCard
            lightTheme = {lightTheme}
              title = "Notebook"
              image={Notebook}
              description="My thoughts, insights, and reflections"
            />
            </div>
        </div>
  )
}

export default OtherSection