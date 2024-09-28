import React from 'react'
import { PROJECT } from '../../constants'
import { motion } from 'framer-motion'

const Project = () => {
	return (
		<div className='pb-4'>
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className='my-20 text-center text-4xl'
			>
				Projects
			</motion.h2>
			<div>
				{PROJECT.map((projects, index) => (
					<div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className='w-full lg:w-[25%]'
						>
							<img
								src={projects.image}
								alt={projects.title}
								width={250}
								height={250}
								className='mb-6 rounded'
							/>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1 }}
							className='w-full  max-w-xl lg:w-[75%]'
						>
							<h3 className='mb-2 font-semibold text-2xl'>{projects.title}</h3>

							<p className='mb-4 text-stone-400 '>{projects.description}</p>
							{projects.technologies.map((tech, index) => (
								<span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium' key={index}>
									{tech}
								</span>
							))}

							<div className='flex'>
								<p className='mr-2 my-3 rounded bg-stone-300 text-stone-900 p-2 text-sm font-medium'>
									<a href={projects.GitHub} target='_blank'>Visit Github</a>
								</p>
								<p className='mr-2 my-3 rounded bg-stone-300 text-stone-900 p-2 text-sm font-medium'>
									<a href={projects.link} target='_blank'>View Live</a>
								</p>
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Project
