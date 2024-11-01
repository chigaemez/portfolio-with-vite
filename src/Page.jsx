import React from 'react'
import {Home} from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Projects/Project'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Header from './components/Header'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Education from './components/Education/Education'

const Page = () => {
  return (
    <div>
        <Header/>
        <Cursor/>
        <Home/>
        <About />
        <Education/>
        <Project />
        <Experience />
        
        <Contact />
    </div>
  )
}

export default Page