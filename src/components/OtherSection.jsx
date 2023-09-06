import React from 'react'
import OtherCard from './OtherCard'

const OtherSection = () => {
  return (
    <div className='w-full space-y-5'>
        <h1 className='text-2xl font-bold text-start text-white'>Get to know me</h1>
            <OtherCard />
            <OtherCard />
            <OtherCard />
            <OtherCard />
        </div>
  )
}

export default OtherSection