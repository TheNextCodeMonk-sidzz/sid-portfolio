import React from 'react'
import About_heading from './About_heading'
import InfoGridSection from './About_cards.jsx'

const About_main = () => {
  return (
    <div className='px-20 py-20'>
        <About_heading/>
        <InfoGridSection/>
    </div>
  )
}

export default About_main