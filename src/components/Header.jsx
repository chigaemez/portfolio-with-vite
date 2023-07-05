import React, { useState } from 'react'
import { logo } from '../assets/image'
import { Link } from 'react-router-dom'

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false)

	const handleMenuClick = () => {
		setToggleMenu(!toggleMenu)
	}

	const scrollpage = () => {
		window.scrollTo(0, 0)
	}

	return (
		<div className='w-full flex items-center justify-between  fixed gap-4  bg-slate-800 py-2 px-20 max-sm:p-10 z-30'>
			<img src={logo} alt='' className='w-20 rounded-3xl' />

			{/* Responsive Toggle */}
			<div className='lg:hidden block space-y-1 cursor-pointer' onClick={handleMenuClick}>
				<div
					className={`w-[25px] h-[4px] bg-black transition-all  ${
						toggleMenu ? 'rotate-45 translate-y-2' : ''
					}`}
				></div>
				<div
					className={`w-[25px] h-[4px] bg-black transition-all ${toggleMenu ? 'hidden' : ''}`}
				></div>
				<div
					className={`w-[25px] h-[4px] bg-black transition-all  ${toggleMenu ? '-rotate-45' : ''}`}
				></div>
			</div>

			{toggleMenu && (
				<div className='lg:hidden w-full absolute top-24 right-0 bg-transparent bg-opacity-90 backdrop-filter backdrop-blur-sm rounded-md py-10 px-10'>
					<ul className='flex flex-col space-y-10 '>
						<Link to='/'>
							<li className=' transition-all cursor-pointer  nav '>HOME</li>
						</Link>

						<Link to='/about'>
							<li className='  transition-all flex items-center gap-2 cursor-pointer nav '>
								MY STACK
							</li>
						</Link>

						<Link to='/project' className=' group'>
							<li className='  transition-all flex items-center gap-2 cursor-pointer nav'>
								MY WORKS
							</li>
						</Link>
						<Link to='/experience' className=' group'>
							<li className='  transition-all flex items-center gap-2 cursor-pointer nav'>
								EXPERIENCE
							</li>
						</Link>
						<Link to='' className=' group'>
							<li className='  transition-all duration-500 px-6 py-2 rounded button cursor-pointer max-sm:hidden  hover:bg-transparent'>
								REACH OUT
							</li>
						</Link>
					</ul>
				</div>
			)}

			<ul className='hidden lg:flex items-center  space-x-2 gap-2 max-sm:hidden '>
				<Link to='/'>
					<li className=' transition-all cursor-pointer  nav '>HOME</li>
				</Link>

				<Link to='/about'>
					<li className='  transition-all flex items-center gap-2 cursor-pointer nav '>MY STACK</li>
				</Link>

				<Link to='/project' className=' group'>
					<li className='  transition-all flex items-center gap-2 cursor-pointer nav'>MY WORKS</li>
				</Link>
				<Link to='/experience' className=' group'>
					<li className='  transition-all flex items-center gap-2 cursor-pointer nav'>
						EXPERIENCE
					</li>
				</Link>
				<Link to='' className=' group'>
					<li className='  transition-all duration-500 px-6 py-2 rounded button cursor-pointer max-sm:hidden  hover:bg-transparent'>
						REACH OUT
					</li>
				</Link>
			</ul>
		</div>
	)
}

export default Header
