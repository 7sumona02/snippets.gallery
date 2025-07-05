'use client'

import { ArrowDownRight } from 'lucide-react'
import { motion } from 'framer-motion'

const FocusHover = ({className}) => {
  return (
    <div className={`bg-white ${className} h-screen w-screen flex items-center justify-center`}>
      <div className='relative group'>
        <div className='relative flex items-center justify-center'>
          <img 
            src='/focus.svg' 
            className='group-hover:w-56 w-80 transition-all ease-in-out duration-500' 
          />
          <div className='absolute translate-z-80'>
            <img 
              src='/arrow.svg' 
              className='w-32 group-hover:w-20 group-hover:-rotate-45 transition-all ease-in-out duration-300' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FocusHover