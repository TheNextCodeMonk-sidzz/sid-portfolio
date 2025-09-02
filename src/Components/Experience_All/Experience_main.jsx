import React from 'react'
import Experience_Line from './Experience_Line'
import Experience from './Experience'
import Experience_cards from './Experience_cards'

const Experience_main = () => {
  return (
    <div className='px-4 sm:px-8 md:px-12 lg:px-20 py-10 lg:py-20'>
        <Experience/>
        <Experience_Line/>
    </div>
  )
}

export default Experience_main