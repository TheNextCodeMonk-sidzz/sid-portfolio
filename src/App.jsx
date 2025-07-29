import React from 'react'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Experience from './Components/Experience_All/Experience'
import Experience_main from './Components/Experience_All/Experience_main'
import Contact_main from './Components/Contact/Contact_main'


const App=()=> {
  return (
    <div className='flex bg-black text-white'>
      <Sidebar/>
      <main className='ml-60 w-full px-20 py-5 overflow-y-auto scroll-smooth '>
        <section className=''>
          <Hero/>
        </section>
        <section>
          <Skills/>
        </section>
        <section>
          <Projects/>
        </section>
        <section>
          <Experience_main/>
        </section>
        <section>
          <Contact_main/>
        </section>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience_Line />} />
        </Routes> */}
      </main>
    </div>
    

  )
}

export default App
