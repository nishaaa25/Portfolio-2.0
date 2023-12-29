import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Project from './Project'
import LetsTalk from './LetsTalk'

const Body = () => {
  return (
    <div className='w-[1080px] m-auto relative'>
      <div className='sticky top-16 z-50'><Header/></div>
      <Hero/>
      <About/>
      <Project/>
      <LetsTalk/>
      <div className='py-6 text-center'>
        <p className='info-text'>&copy; 2024, <span className='text-white'>Nisha Kumari </span>❤️</p>
      </div>
    </div>
  )
}

export default Body
