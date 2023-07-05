import React from 'react'
import { optikkal, dash, shopping, Screenshot14, Screenshot3 } from '../../assets/image'
import Header from '../Header'

const Project = () => {
	return (
		<div className='bg-slate-900 '>
			<Header />
			<div className='flex flex-col text-center items-center justify-center bg-slate-900'>
				<h2 className='text-4xl  text-slate-500 font-bold text-center mt-32'>
					My Projects
				</h2>

				<p className='text-2xl font-medium w-2/4  text-slate-500 mt-9'>
					Here you will find some of the personal and clients projects that I created
				</p>
			</div>

			<div className=' md:mx-1.5 flex flex-col  gap-20 py-10 '>
				<div className='  flex flex-wrap gap-40   items-center justify-center '>
					<div className='group relative sm:w-3/5 md:w-2/4 lg:w-2/5  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl '>

						<img
							className='h-full wfull rounded-3xl object-cover  duration-500 '
							src={optikkal}
							alt=''
						/>

						<div className='absolute inset-0 flex translate-y-[280px] h-3/6 opacity-0 items-center justify-center flex-col group-hover:opacity-90 duration-500 group-hover:translate-y-[157px] bg-slate-800 rounded-b-3xl '>
							<h1 className=' text-3xl font-bold text-white text-left'>Optikkal Tech</h1>
							<p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								React.js Postcss Tailwind css aos node.js
							</p>
						</div>
					</div>
					<div className='group relative sm:w-3/5 md:w-2/4 lg:w-2/5  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl '>
						<img className='h-full wfull rounded-3xl object-cover  duration-500 ' src={dash} alt='' />

						<div className='absolute inset-0 flex translate-y-[280px] h-3/6 opacity-0 items-center justify-center flex-col group-hover:opacity-90 duration-500 group-hover:translate-y-[157px] bg-slate-800 rounded-b-3xl '>
							<h1 className=' text-3xl font-bold text-white text-left'>Admin dashboard</h1>
							<p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								React.js Postcss Tailwind css synfusion
							</p>
						</div>
					</div>
				</div>

				<div className='flex flex-wrap gap-40  items-center justify-center'>
					<div className='group relative sm:w-3/5 lg:sm:w-3/5 md:w-2/4 lg:w-2/5   cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl '>
						<img
							className='h-full wfull rounded-3xl object-cover  duration-500 '
							src={shopping}
							alt=''
						/>

						<div className='absolute inset-0 flex translate-y-[280px] h-3/6 opacity-0 items-center justify-center flex-col group-hover:opacity-90 duration-500 group-hover:translate-y-[160px] bg-slate-800 rounded-b-3xl '>
							<h1 className=' text-3xl font-bold text-white text-left'>Shopping cart</h1>
							<p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								React.js Postcss Tailwind css  Axios
							</p>
						</div>
					</div>
					<div className='group relative sm:w-3/5 md:w-2/4 lg:w-2/5  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl '>
						<img
							className='h-full wfull rounded-3xl object-cover  duration-500 '
							src={Screenshot14}
							alt=''
						/>

						<div className='absolute inset-0 flex translate-y-[280px] h-3/6 opacity-0 items-center justify-center flex-col group-hover:opacity-90 duration-500 group-hover:translate-y-[160px] bg-slate-800 rounded-b-3xl '>
							<h1 className=' text-3xl font-bold text-white text-left'>Movie list</h1>
							<p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								React.js Postcss Tailwind css Axios 
							</p>
						</div>
					</div>
				</div>

				<div className='flex flex-wrap lg:gap-40  items-center justify-center'>
					<div className='group relative sm:w-3/5 md:w-2/4 lg:w-2/5  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl '>
						<img
							className='h-full wfull rounded-3xl object-cover  duration-500 '
							src={Screenshot3}
							alt=''
						/>

						<div className='absolute inset-0 flex translate-y-[280px] h-3/6 opacity-0 items-center justify-center flex-col group-hover:opacity-90 duration-500 group-hover:translate-y-[180px] bg-slate-800 rounded-b-3xl '>
							<h1 className=' text-3xl font-bold text-white text-left'>Sneaker Store</h1>
							<p className='mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
								React.js Postcss Tailwind css 
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project
