import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div 
      className='flex items-center justify-between gap-4 py-4 px-6 mt-20 
      bg-gray-600 text-gray-300 border-t border-gray-700'
    >
      {/* Logo */}
      <img src={assets.logo4_1} alt='' width={150} />

      {/* Copyright */}
      <p 
        className='flex-1 border-l border-gray-700 pl-4 text-sm text-gray-400 
        max-sm:hidden'
      >
        Copyright © <span className='text-teal-400'>PixScribe.com</span> | All rights reserved.
      </p>

      {/* Social Icons */}
      <div className='flex gap-3'>
        <img 
          src={assets.facebook_icon} 
          alt='facebook' 
          width={35} 
          className='cursor-pointer hover:scale-110 transition-transform'
        />
        <img 
          src={assets.twitter_icon} 
          alt='twitter' 
          width={35} 
          className='cursor-pointer hover:scale-110 transition-transform'
        />
        <img 
          src={assets.instagram_icon} 
          alt='instagram' 
          width={35} 
          className='cursor-pointer hover:scale-110 transition-transform'
        />
      </div>
    </div>
  )
}

export default Footer
