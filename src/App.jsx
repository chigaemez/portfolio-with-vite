import { useState } from 'react'
import About from './components/About/About'
import Home from './components/Home/Home'
import Project from './components/Projects/Project'
import './Main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cursor from './components/Cursor'
import AnimatedCursor from "react-animated-cursor"
import Experience from './components/Experience/Experience'

function App () {



	return (
		< >
	 
     
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/project' element={<Project />} />
					<Route path='/experience' element={<Experience />} />
				</Routes>
			</BrowserRouter>

     
		</>
	)
}

export default App
