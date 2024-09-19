import React from 'react'
import Cursor from '../Cursor'
import Header from '../Header'
import { PROJECT } from '../../constants'
import {
	Screenshot3,
	background,
	dash,
	optikkal,
	portfolio,
	shopping,
	video,
	weather,
} from '../../assets/image/Index'

const Project = () => {
	return (
		<div className='pb-4'>
			<h2 className='my-20 text-center text-4xl'>Projects</h2>
			<div>
				{PROJECT.map((projects, index) => (
					<div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
						<div className='w-full lg:w-[25%]'>
							<img
								src={projects.image}
								alt={projects.title}
								width={250}
								height={250}
								className='mb-6 rounded'
							/>
						</div>
						<div className='w-full max-w-xl lg:w-[75%]'>
							<h3 className='mb-2 font-semibold text-2xl'>{projects.title}</h3>
							<p className='mb-4 text-stone-400 '>{projects.description}</p>
							{projects.technologies.map((tech, index) => (
								<span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium' key={index}>
									{tech}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Project
