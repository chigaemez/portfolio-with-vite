import React from 'react'
import Cursor from '../Cursor'
import Header from '../Header'
import {
	Screenshot14,
	Screenshot3,
	background,
	dash,
	optikkal,
	portfolio,
	shopping,
} from '../../assets/image/Index'

const Project = () => {
	return (
		<div id='work' className=' px-4  py-9 bg-slate-600   '>
			<div className='flex flex-col text-center items-center justify-center '>
				<h2 className='text-3xl mt-10  text-slate-200 font-bold text-center '>Portfolio</h2>
				<hr className='w-16 bg-white h-2 rounded-full animate-bounce duration-500 text-center mt-3 ' />
			</div>

			<div className=' md:mx-1.5 flex flex-col   gap-14 py-10 '>
				<div className='  flex flex-wrap gap-14    items-center justify-center '>
				<div
						className='group  relative sm:w-[50%] md:w-[50%] lg:w-[30%]  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:scale-[1.1] hover:transition-all hover:duration-500'
						data-aos='fade-up'
					>
						<img
							className='h-full wfull rounded-lg object-cover  duration-500 '
							src={portfolio}
							alt=''
						/>

						<div className='absolute inset-0 flex translate-y-[280px] h-full opacity-0 items-center justify-center flex-col group-hover:opacity-90 duration-500  group-hover:translate-y-[0px] bg-slate-800 rounded-b-lg'>
							<h1 className=' text-3xl font-bold text-white text-left'>My Portfolio</h1>
							<p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								React.js Postcss Tailwind  aos  vite
							</p>
							<ul className='flex gap-6'>
							
								<li className='text-white border-[2px] px-7 py-2'>
									<a href=''>View Live</a>
								</li>
							</ul>
						</div>
					</div>
					<div
						className='group  relative sm:w-[50%] md:w-[50%] lg:w-[30%]  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:scale-[1.1] hover:transition-all hover:duration-500'
						data-aos='fade-up'
					>
						<img
							className='h-full wfull rounded-lg object-cover  duration-500 '
							src={optikkal}
							alt=''
						/>

						<div className='absolute inset-0 flex translate-y-[280px] h-full opacity-0 items-center justify-center flex-col group-hover:opacity-90 duration-500  group-hover:translate-y-[0px] bg-slate-800 rounded-b-lg'>
							<h1 className=' text-3xl font-bold text-white text-left'>Optikkal Tech</h1>
							<p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								React.js Postcss Tailwind css aos node.js vite
							</p>
							<ul className='flex gap-6'>
								<li className='text-white border-[2px] px-7 py-2 '>
									<a href='https://github.com/optikkaltech/optikkalwebsite'>View on Github</a>
								</li>
								<li className='text-white border-[2px] px-7 py-2'>
									<a href=''>View Live</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='flex flex-wrap gap-10  items-center justify-center'>
					<div
						data-aos='fade-up	'
						className='group relative sm:w-[50%] md:w-[50%] lg:w-[30%]   cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:scale-[1.1] hover:transition-all hover:duration-500'
					>
						<img
							className='h-full wfull rounded-lg object-cover  duration-500 '
							src={shopping}
							alt=''
						/>

						<div className='absolute inset-0 flex translate-y-[280px] h-full opacity-0 items-center justify-center flex-col group-hover:opacity-90 duration-500  group-hover:translate-y-[0px] bg-slate-800 rounded-b-lg '>
							<h1 className=' text-3xl font-bold text-white text-left'>Shopping cart</h1>
							<p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								React.js Postcss Tailwind css Axios
							</p>
							<ul className='flex gap-6'>
								<li className='text-white border-[2px] px-7 py-2 '>
									<a href='https://github.com/chigaemez/React-shopping-cart'>View on Github</a>
								</li>
								<li className='text-white border-[2px] px-7 py-2'>
									<a href=''>View Live</a>
								</li>
							</ul>
						</div>
					</div>
					<div
						data-aos='fade-up'
						className='group relative sm:w-[50%] md:w-[50%] lg:w-[30%]  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:scale-[1.1] hover:transition-all hover:duration-500 '
					>
						<img
							className='h-full wfull rounded-lg object-cover  duration-500 '
							src={Screenshot14}
							alt=''
						/>

						<div className='absolute inset-0 flex translate-y-[280px] h-full opacity-0 items-center justify-center flex-col group-hover:opacity-90 duration-500  group-hover:translate-y-[0px] bg-slate-800 rounded-b-lg '>
							<h1 className=' text-3xl font-bold text-white text-left'>Movie list</h1>
							<p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								React.js Postcss Tailwind css Axios
							</p>
							<ul className='flex gap-6'>
								<li className='text-white border-[2px] px-7 py-2 '>
									<a href='https://github.com/chigaemez/VideoApp'>View on Github</a>
								</li>
								<li className='text-white border-[2px] px-7 py-2'>
									<a href=''>View Live</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div data-aos='fade-up	' className='flex flex-wrap gap-14  items-center justify-center'>
					<div className='group relative sm:w-[50%] md:w-[50%] lg:w-[30%]  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:scale-[1.1] hover:transition-all hover:duration-500'>
						<img
							className='h-full wfull rounded-lg object-cover  duration-500 '
							src={Screenshot3}
							alt=''
						/>

						<div className='absolute inset-0 flex translate-y-[280px] h-full opacity-0 items-center justify-center flex-col group-hover:opacity-90 duration-500  group-hover:translate-y-[0px] bg-slate-800 rounded-b-lg '>
							<h1 className=' text-3xl font-bold text-white text-left'>Sneaker Store</h1>
							<p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								React.js Postcss Tailwind css
							</p>
							<ul className='flex gap-6'>
								<li className='text-white border-[2px] px-7 py-2 '>
									<a href='https://github.com/chigaemez/Benevolent'>View on Github</a>
								</li>
								<li className='text-white border-[2px] px-7 py-2'>
									<a href=''>View Live</a>
								</li>
							</ul>
						</div>
					</div>
					<div
						data-aos='fade-up'
						className='group relative sm:w-[50%] md:w-[50%] lg:w-[30%]  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:scale-[1.1] hover:transition-all hover:duration-500 '
					>
						<img
							className='h-full wfull rounded-lg object-cover  duration-500 '
							src={dash}
							alt=''
						/>

						<div className='absolute inset-0 flex translate-y-[280px] h-full opacity-0 items-center justify-center flex-col group-hover:opacity-90 duration-500  group-hover:translate-y-[0px] bg-slate-800 rounded-b-lg '>
							<h1 className=' text-3xl font-bold text-white text-left'>Admin dashboard</h1>
							<p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								React.js Postcss Tailwind css synfusion
							</p>
							<ul className='flex gap-6'>
								<li className='text-white border-[2px] px-7 py-2 '>
									<a href='https://github.com/chigaemez/DashBoard'>View on Github</a>
								</li>
								<li className='text-white border-[2px] px-7 py-2'>
									<a href=''>View Live</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project
