import React, { useState, useEffect } from 'react'
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Project/Projects'
import Experience_main from './Components/Experience_All/Experience_main'
import Contact_main from './Components/Contact/Contact_main'
import About_main from './Components/About/About_main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <Router>
      <ScrollToTop/>
      <div className='flex bg-black text-white min-h-screen' style={{backgroundColor: '#121212'}}>
        
        {/* Mobile Floating Action Button - Bottom Right */}
        <button 
          onClick={toggleSidebar}
          className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-zinc-800 hover:bg-zinc-700 rounded-full text-white transition-all duration-300 shadow-2xl border-2 border-zinc-600 hover:border-zinc-500 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

       <Sidebar isOpen={isMobile ? isSidebarOpen : true} onClose={closeSidebar} isMobile={isMobile} />
        
        {/* Main content - Original desktop spacing with mobile responsiveness */}
        <main className={`flex-1 transition-all duration-300 ease-in-out ${
          isMobile ? 'w-full' : 'lg:ml-60'
        } px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-6 lg:py-5 overflow-y-auto scroll-smooth`}>
          <Routes>
            <Route path="/" element={<Hero onNavigate={closeSidebar} />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience_main />} />
            <Route path="/contact" element={<Contact_main />} />
            <Route path="/about" element={<About_main />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
