import React from 'react'
import { HeroBG } from '../../assets/image/Index'
import { facebook, linkedin, twitter, github } from '../../assets/icons'
import Header from '../Header'
import Cursor from '../Cursor'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div>
			<Header />
			<Cursor />
			<div></div>
			<div
				className='h-screen  bg-cover -z-10 space-y-4 bg-center  bg-no-repeat  flex flex-col justify-center'
				style={{ backgroundImage: `url(${HeroBG})` }}
			>
				<div className='space-y-3 text-center  -mb-[370px] text-white flex flex-col items-center'>
					<h2 className='text-6xl font-bold ' data-aos='flip-left'>
						HEY, I'M CHRISTOPHER, A{' '}
					
					</h2>
					
					<p className='w-2/4 text-xl '>
						A Frontend focused Web Developer building the Frontend of Websites and Web Applications
						that leads to the success of the overall product
					</p>
				
					<Link to={'/project'}>
						<button className='project z-20 animate-pulse mt-10 text-lg font-semibold   px-16 py-3 rounded-md'>
							MY WORKS
						</button>
					</Link>
				</div>

				<div className='p-4 bg-white w-20 h-80   rounded-br-full items-end '>
					<ul>
						<li className='mt-3 cursor-pointer '>
							<a href='https://web.facebook.com/kulture.darlington/about_overview'>
								<img src={facebook} alt='' className='w-10 cursor-pointer' />
							</a>
						</li>
						<li className='mt-8 cursor-pointer'>
							<a href='https://twitter.com/Czarchr60510123'>
								<img src={twitter} alt='' className='w-8 cursor-pointer' />
							</a>
						</li>
						<li className='mt-8 cursor-pointer'>
							<a href='https://github.com/chigaemez'>
								<img src={github} alt='' className='w-8 cursor-pointer' />
							</a>
						</li>
						<li className='mt-8 cursor-pointer'>
							<a href='https://www.linkedin.com/in/orji-christopher-9b71a2246?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BA2BZCw%2FqTu2%2FUPH6UXtDbw%3D%3D'>
								<img src={linkedin} alt='' className='w-8 cursor-pointer' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Home
