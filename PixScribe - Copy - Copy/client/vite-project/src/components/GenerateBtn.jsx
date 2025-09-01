import React from 'react'
import { assets } from '../assets/assets'

const GenerateBtn = () => {
  return (
    <div className='pb-16 text-center bg-gray-600 text-gray-100'>
      <h1 
        className='text-2xl md:text-3xl lg:text-4xl 
        mt-4 font-semibold text-gray-100 py-6 md:py-16'
      >
        See the magic, <span className='text-teal-400'>Try now</span>
      </h1>

      <button 
        className='inline-flex items-center gap-2 px-12 py-3 
        rounded-full bg-teal-500 text-gray-900 font-medium 
        hover:bg-teal-400 hover:scale-105 transition-all duration-300'
      >
        Generate Images
        <img src={assets.star_group} alt='' className='h-6' />
      </button>
    </div>
  )
}

export default GenerateBtn
