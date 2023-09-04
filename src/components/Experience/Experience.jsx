import React from 'react'
import Header from '../Header'
import Cursor from '../Cursor'

const Experience = () => {
	return (
		<div className=''>
			<Header />
			<Cursor/>
			<div className='flex justify-center    flex-col items-center'>
				<div className=' w-[50%]   px-6 py-6 mt-36  shadow-xl shadow-slate-300'>
					<h1 className='text-3xl text-center font-semibold text-slate-600'>OPTIKKAL TECH</h1>
					<hr />
					<div className='flex flex-row mt-7'>
						<h1 className='flex font-medium text-xl text-slate-600'> ROLE:</h1>
						<p className='flex font-medium text-xl text-slate-600 px-2'> Frontend Developer</p>
					</div>

					<div className='flex flex-row mt-7'>
						<h1 className='flex font-medium text-xl text-slate-600'> STACK:</h1>
						<p className='flex font-medium text-xl text-slate-600 px-2'> Tailwind css, Reactjs, </p>
					</div>
					<div className='flex flex-row mt-7'>
						<h1 className='flex font-medium text-xl text-slate-600'> DATE STARTED:</h1>
						<p className='flex font-medium text-xl text-slate-600 px-2'> October 13 2022</p>
					</div>
					<div className='flex flex-row mt-7'>
						<h1 className='flex font-medium text-xl text-slate-600'> DATE END:</h1>
						<p className='flex font-medium text-xl text-slate-600 px-2'> Currently Working</p>
					</div>
					<div className='flex flex-row mt-7'>
						<h1 className='flex font-medium text-xl text-slate-600'> LOCATION:</h1>
						<p className='flex font-medium text-xl text-slate-600 px-2'> lekki Lagos Nigeria</p>
					</div>
					<div className='flex flex-row mt-7'>
						<h1 className='flex font-medium text-xl text-slate-600'> Website:</h1>
						<p className='flex font-medium text-xl text-slate-600 px-2'> OptikkalTech.io</p>
					</div>
					<div className='flex flex-row mt-7'>
						<p className='flex font-medium text-xl text-slate-600 px-2'>
							Responsible for providing user experience, such as making sure user have full access
							to the interaction of the website, like logging in and much more{' '}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Experience
