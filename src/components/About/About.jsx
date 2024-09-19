import React from 'react'
import { RiReactjsLine, RiJavascriptLine } from 'react-icons/ri'
import { TbBrandTypescript } from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa6'
import { animate, motion } from 'framer-motion'

const IconVariants = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: 'linear',
			repeat: Infinity,
			repeatType: 'reverse',
		},
	},
})

const About = () => {
	return (
		<div className=' pb-24 '>
			<motion.h1
				whileInView={{ opacity: 1, y: 0 }}
				className='my-20 text-center text-4xl'
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.5 }}
			>
				{' '}
				Technologies
			</motion.h1>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1.5 }}
				className='flex flex-wrap items-center justify-center gap-4'
			>
				<motion.div 
					initial='initial' 
					animate='animate' 
					variants={IconVariants(2.5)} 
				>
					<RiReactjsLine className='text-7xl text-cyan-400 ' />

				</motion.div>

				<motion.div 
					initial='initial' 
					animate='animate' 
					variants={IconVariants(3)} 
					className='p-4'
				>
					<RiJavascriptLine className='text-7xl text-yellow-500' />

				</motion.div>

				<motion.div 
					initial='initial' 
					animate='animate' 
					variants={IconVariants(5)} 
					className='p-4'
					>
					<TbBrandTypescript className='text-7xl text-blue-600' />

				</motion.div>

				<motion.div 
					initial='initial' 
					animate='animate' 
					variants={IconVariants(2)} 
					className='p-4'
					>
					<FaNodeJs className='text-7xl text-green-600' />

				</motion.div>
			</motion.div>
		</div>
	)
}

export default About
