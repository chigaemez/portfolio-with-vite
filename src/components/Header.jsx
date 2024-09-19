import React from 'react'
import { logo } from '../assets/image/Index'
import { facebook, github, linkedin, twitter } from '../assets/icons'
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";


const Header = () => {
	return (
		<div className='flex items-center justify-between py-6 z-40'>
			<div className='flex flex-shrink-0 items-center'>
				<a href='/' aria-label='Home'>
					<img src={logo} alt='' className='mx-2' width={50} height={22} />
				</a>
			</div>
			<div className=' flex items-center justify-center gap-10 text-2xl'>
				<ul className='gap-5 flex flex-row py-4 z-[99]'>
					<li className=' cursor-pointer hover:scale-[1.1] hover:transition-all hover:duration-500 '>
						<a href='https://web.facebook.com/kulture.darlington/about_overview'>
							<FaInstagram/>
						</a>
					</li>
					<li className=' cursor-pointer hover:scale-[1.1] hover:transition-all hover:duration-500'>
						<a href='https://twitter.com/Czarchr60510123'>
							<FaXTwitter  />
						</a>
					</li>
					<li className=' cursor-pointer hover:scale-[1.1] hover:transition-all hover:duration-500'>
						<a href='https://github.com/chigaemez'>
							<FaGithub />
						</a>
					</li>
					<li className=' cursor-pointer hover:scale-[1.1] hover:transition-all hover:duration-500 '>
						<a href='https://www.linkedin.com/in/orji-christopher'>
							<FaLinkedin/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
