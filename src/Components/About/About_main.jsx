import React from 'react'
import About_heading from './About_heading'
import InfoGridSection from './About_cards.jsx'

const About_main = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center py-12 sm:py-16 lg:py-20  '>
      <div className="w-full max-w-none lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <About_heading/>
        <InfoGridSection/>
      </div>
    </div>
  )
}

export default About_main