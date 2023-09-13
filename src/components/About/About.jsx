import React from 'react'
import { Link } from 'react-router-dom'
import { mine } from '../../assets/image/Index'

const About = () => {
	return (
		<div id='About'>
			<div className=' flex flex-col items-center justify-center  px-5 pt-10 animate-[] w-full'>
				<h2 className='text-4xl  font-bold text-center mt-32'>ABOUT ME</h2>
				<hr className='w-16 bg-orange-600 h-2 rounded-full animate-bounce duration-500 text-center mt-3 ' />
				<p className='text-base font-medium'>Learn more about my skills, qualifications, and experiences.</p>
				

				<div className='flex lg:w-[60%] lg:flex-row flex-col my-10  justify-center gap-20 '>
					<div className="flex bg-slate-200 rounded-md p-4">
						<div className="flex bg-slate-100 p-4 rounded-md">
						<img src={mine} alt="" className='w-[100%] h-[30vh]' />
						</div>
					</div>
					<div className='   lg:text-left text-center lg:w-[63%] '>
						<p className=' text-lg font-medium text-slate-700 '>
							I'm a frontend web developer with over 2+ years of experience with a strong focus on
							creating visually appealing, responsive and scalable websites and web applications.
						</p>
						<p className='text-lg font-medium my-8 text-slate-700 '>
						Feel free to <Link to='contact' className='text-orange-600'>connect</Link>  and share your project ideas and I would be delighted to collaborate with you and help bring your ideas into reality. I look forward to hearing from you!
						</p>
						<Link to='/contact'>
							<button className=' contact text-base mt-6 border-none font-semibold text-slate-800 border hover:outline-none  px-[10%] py-3 rounded-md'>
								Download CV
							</button>
						</Link>
					</div>

					
				</div>
			</div>
		</div>
	)
}

export default About
