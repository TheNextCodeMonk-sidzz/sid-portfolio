import React from 'react'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Project/Projects'
import Experience_main from './Components/Experience_All/Experience_main'
import Contact_main from './Components/Contact/Contact_main'
import About_main from './Components/About/About_main'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'


// const Home=()=>(
//   <>
//     <Hero/>
//     <Skills/>
//     <Projects/>
//   </>
// );

const App=()=> {
  return (
    <Router>
      <ScrollToTop/>
      <div className='flex bg-black text-white' style={{backgroundColor: '#121212'}}>
      <Sidebar/>
      <main className='ml-60 w-full px-20 py-5 overflow-y-auto scroll-smooth '>
        <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience_main />} />
            <Route path="/contact" element={<Contact_main />} />
            <Route path="/about" element={<About_main />} />
            {/* Add more routes as needed */}
          </Routes>
        {/* <section className=''>
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
        <section>
          <About_main/>
        </section> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience_Line />} />
        </Routes> */}
      </main>
    </div>
    </Router>
    
    

  )
}

export default App
