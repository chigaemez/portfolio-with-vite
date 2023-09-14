import React, { useState } from 'react'
import {
	FaBriefcase,
	FaHome,
	FaMagento,
	FaMailBulk,
	FaMailchimp,
	FaMarsDouble,
	FaUser,
} from 'react-icons/fa'
import { logo } from '../assets/image/Index'
import { Link } from 'react-scroll'
import { BiMessageAlt } from 'react-icons/bi'

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [menuBar, setMenuBar] = useState(false)

	const handleMenuClick = () => {
		setToggleMenu(!toggleMenu)
	}

	const scrollpage = () => {
		window.scrollTo(0, 0)
	}

	return (
		<div className='w-full lg:w-[7%] lg:h-screen flex lg:flex-col items-center justify-between lg:bg-slate-600 lg:justify-start lg:items-start fixed gap-4 bg-transparent py-5 px-5 z-30'>
			<Link to='hero' spy={true} smooth={true} offset={50} duration={500}>
				<img
					src={logo}
					alt=''
					className='w-[50px] hover:animate-spin rounded-full cursor-pointer'
				/>
			</Link>

			{/* Responsive Toggle */}
			<div className='lg:hidden block space-y-1 cursor-pointer z-50' onClick={handleMenuClick}>
				<div
					className={`w-[25px] h-[4px] bg-[#a5620b] transition-all duration-[800ms]  ${
						toggleMenu ? 'rotate-45 translate-y-2' : ''
					}`}
				></div>

				<div
					className={`w-[25px] h-[4px] bg-[#a5620b] transition-all duration-[800ms]  ${
						toggleMenu ? '-rotate-45' : ''
					}`}
				></div>
			</div>

			{toggleMenu &&  (
				<div
					className='lg:hidden w-full duration-1000 transition-all bg-[#151717] h-[120vh] absolute top-[0] right-0  bg-opacity-90 backdrop-filter backdrop-blur-sm z-30  py-20 px-10'
					data-aos='fade-up'
				>
					<ul className='flex flex-col space-y-10 my-9 gap-5 justify-end items-end '>
						<Link
							to='hero'
							spy={true}
							smooth={true}
							offset={50}
							duration={300}
							className='flex justify-center  items-center'
							data-aos='fade-up'
						>
							<li className='text-white text-lg  mx-11 '>Home</li>
							<FaHome className='text-white text-2xl' />
						</Link>

						<Link
							to='About'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
							className='flex justify-center  items-center'
							data-aos='fade-up'
						>
							<li className='text-white text-lg  mx-11 '>About Me</li>
							<FaUser className='text-white text-2xl' />
						</Link>
						<Link
							to='resume'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
							className='flex justify-center  items-center'
							data-aos='fade-up'
						>
							<li className='text-white text-lg  mx-11 '>Resume</li>
							<FaUser className='text-white text-2xl' />
						</Link>

						<Link
							to='work'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
							className='flex justify-center  items-center'
							data-aos='fade-up'
						>
							<li className='text-white text-lg  mx-11 '>My Work</li>
							<FaBriefcase className='text-white text-2xl' />
						</Link>
						<Link
							to='portfolio'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
							className='flex justify-center  items-center'
							data-aos='fade-up'
						>
							<li className='text-white text-lg  mx-11 '>Portfolio</li>
							<FaMagento className='text-white text-2xl' />
						</Link>
						<Link
							to='contact'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
							className='flex justify-center  items-center'
							data-aos='fade-up'
						>
							<li className='text-white text-lg  mx-11 '>Contact</li>
							<BiMessageAlt className='text-white text-2xl' />
						</Link>
					</ul>
				</div>
			)}

			<ul className='hidden  lg:flex items-center  my-[140%] space-x-2  max-sm:hidden lg:w-[35%]  flex-col h-full z-index-[20px] gap-14 py-5  lg:px-8  z-30  '>
				<div className='group hover:duration-500'>
					<Link
						to='hero'
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
						className='  flex justify-center text-slate-100 items-center mx-2 hover:bg-white hover:text-slate-700 w-12 h-12  rounded-full'
						data-aos='fade-up'
					>
						<FaHome className=' text-3xl cursor-pointer' />
					</Link>
					<p className='text-slate-700 w-[70%] text-center py-1 opacity-0  group-hover:opacity-100 duration-300 text-lg font-medium bg-white rounded-md absolute right-[-110px] mt-[-45px]'>
						Home
					</p>
				</div>

				<div className='group hover:duration-500  '>
					<Link
						to='About'
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						className='  flex justify-center text-slate-100 items-center mx-2 hover:bg-white hover:text-slate-700 w-12 h-12  rounded-full'
						data-aos='fade-up'
					>
						<FaUser className=' text-2xl  cursor-pointer' />
					</Link>
					<p className='text-slate-700 w-[70%] text-center py-1 opacity-0  group-hover:opacity-100 duration-300 text-lg font-medium bg-white rounded-md absolute right-[-110px] mt-[-45px]'>
						About
					</p>
				</div>
				

				<div className='group hover:duration-500  '>
					<Link
						to='resume'
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						className='  flex justify-center text-slate-100 items-center mx-2 hover:bg-white hover:text-slate-700 w-12 h-12  rounded-full'
						data-aos='fade-up'
					>
						<FaBriefcase className=' text-2xl  cursor-pointer' />
					</Link>
					<p className='text-slate-700 w-[70%] text-center py-1 opacity-0  group-hover:opacity-100 duration-300 text-lg font-medium bg-white rounded-md absolute right-[-110px] mt-[-45px]'>
						Resume
					</p>
				</div>
				<div className='group hover:duration-500  '>
					<Link
						to='work'
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						className='  flex justify-center text-slate-100 items-center mx-2 hover:bg-white hover:text-slate-700 w-12 h-12  rounded-full'
						data-aos='fade-up'
					>
						<FaMagento className=' text-2xl  cursor-pointer' />
					</Link>
					<p className='text-slate-700 w-[70%] text-center py-1 opacity-0  group-hover:opacity-100 duration-300 text-lg font-medium bg-white rounded-md absolute right-[-110px] mt-[-45px]'>
						Portfolio
					</p>
				</div>
				<div className='group hover:duration-500  '>
					<Link
						to='contact'
						spy={true}
						smooth={true}
						offset={50}
						duration={500}
						className='  flex justify-center text-slate-100 items-center mx-2 hover:bg-white hover:text-slate-700 w-12 h-12  rounded-full'
						data-aos='fade-up'
					>
						<BiMessageAlt className=' text-2xl  cursor-pointer' />
					</Link>
					<p className='text-slate-700 w-[70%] text-center py-1 opacity-0  group-hover:opacity-100 duration-300 text-lg font-medium bg-white rounded-md absolute right-[-110px] mt-[-45px]'>
						Contact
					</p>
				</div>
			</ul>
		</div>
	)
}

export default Header
