import React from 'react'
import { RiReactjsLine, RiJavascriptLine  } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { mine } from '../../assets/image/Index'

const About = () => {
	return (
		<div className=' pb-24 '>
			<h1 className='my-20 text-center text-4xl'> Technologies</h1>
			<div className="flex flex-wrap items-center justify-center gap-4">
				<div>
					<RiReactjsLine className='text-7xl text-cyan-400 '/>
				</div>
				<div className='p-4'>
					<RiJavascriptLine className='text-7xl text-yellow-500'/>
				</div>
				<div className='p-4'>
					<TbBrandTypescript className='text-7xl text-blue-600'/>
				</div>
				<div className='p-4'>
					<FaNodeJs className='text-7xl text-green-600'/>
				</div>
			</div>
		</div>
	)
}

export default About
