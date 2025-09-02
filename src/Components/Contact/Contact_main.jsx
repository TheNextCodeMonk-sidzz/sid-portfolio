import React from 'react'
import Contact_header from './Contact_header'
import Contact_Form from './Contact_Form'

const Contact_main = () => {
  return (
    <div className='px-4 sm:px-8 md:px-12 lg:px-20 py-8 lg:my-8'>
      <Contact_header/>
      <Contact_Form/>
    </div>
  )
}

export default Contact_main