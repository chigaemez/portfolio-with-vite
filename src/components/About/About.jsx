import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import Cursor from '../Cursor'

const About = () => {
	return (
		<div>
			<Header />
			<Cursor/>
			<div className=' flex flex-col items-center justify-center mb-10 px-10 animate-[] w-full' >
				<h2 className='text-3xl  font-bold text-center mt-32'>ABOUT ME</h2>
				<hr className='w-16 bg-orange-600 h-2 rounded-full animate-bounce duration-500 text-center mt-3 ' />

				<p className='text-xl w-7/12 font-semibold  mt-11  text-center text-slate-700'>
					Here you will find more information about me, what I do, and my current skills mostly in
					terms of programming and technology
				</p>

				<div className='flex flex-col lg:flex-row items-center justify-center gap-28 px-10'>
					<div className=' mt-14 lg:w-2/4  w-[80%]'>
						<h2 className='text-3xl mb-8  text-center font-bold'>Get to know me!</h2>
						<p className=' text-lg font-medium text-slate-700 text-left'>
							Hello, my name is Christopher. I have been developing websites for over 2 years. Check
							out some of my work in the Projects section. I`m a frontend web developer.
							Technologies i use are "Reactjs, HTML, CSS AND JS". i create responsive sites that are
							displayed on all devices, desktops, smart phones. Ofcourse before i begin developing
							any web-app, landing-Page, business websites or E-commerce. I need to have a ready
							made project layout (Sketch). And i'm ready to do this for you, before we start
							developing you'r websites we will discuss all the details of your niche with, i will
							conduct a survey of your competitors and make a list of their advantages and weakness.
							all this is necessary to give your customer something your competitors do not provide.
						</p>
						<Link to='/contact'>
							<button className=' contact text-base mt-6  font-semibold text-slate-800  px-16 py-3 rounded-md'>
								REACH OUT TO ME
							</button>
							
						</Link>
					</div>

				<div className="flex flex-wrap gap-6">
					<p className='px-11 py-3 rounded-md text-primary5 bg-slate-600'>HTML</p>
					<p className='px-11 py-3 rounded-md text-primary5 bg-slate-600'>CSS</p>
					<p className='px-11 py-3 rounded-md text-primary5 bg-slate-600'>JAVASCRIPT</p>
					<p className='px-11 py-3 rounded-md text-primary5 bg-slate-600'>REACTJS</p>
					<p className='px-11 py-3 rounded-md text-primary5 bg-slate-600'>TAILWIND</p>
					<p className='px-11 py-3 rounded-md text-primary5 bg-slate-600'>REDUX</p>
					<p className='px-11 py-3 rounded-md text-primary5 bg-slate-600'>BOOTSTRAP</p>
				</div>
				</div>
			</div>
		</div>
	)
}

export default About
