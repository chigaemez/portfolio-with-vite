import React from 'react'
import { HeroBG } from '../../assets/image/Index'
import { facebook, linkedin, twitter, github } from '../../assets/icons'
import { Link } from 'react-scroll'
import {BsChevronDoubleDown} from 'react-icons/bs'

const Home = () => {
	return (
		<div id='hero'>
			
			<div></div>
			<div
				className='h-screen  bg-cover -z-10 space-y-4 bg-center bg-slate-900  bg-no-repeat  flex flex-col justify-center'
				style={{ backgroundImage: `url(${HeroBG})` }}
			>
				<div className='space-y-3 text-left  text-white flex flex-col md:items-center  px-6' data-aos='flip-left'>
					<div className='flex flex-col text-left my-[120px] '>
						<p className='text-3xl  '>Hello,  i'm</p>
						<h2 className='text-5xl lg:text-6xl my-5 font-bold ' data-aos='flip-left'>
							ORJI CHRISTOPHER{' '}
						</h2>
						<p className='text-2xl my-5'>
							<li>Frontend web developer</li>
						</p>
						<ul className='gap-5 flex flex-row py-4'>
							<li className=' cursor-pointer hover:scale-[1.1] hover:transition-all hover:duration-500 '>
								<a href='https://web.facebook.com/kulture.darlington/about_overview'>
									<img src={facebook} alt='' className='w-8 cursor-pointer bg-white rounded-lg' />
								</a>
							</li>
							<li className=' cursor-pointer hover:scale-[1.1] hover:transition-all hover:duration-500'>
								<a href='https://twitter.com/Czarchr60510123'>
									<img
										src={twitter}
										alt=''
										className='w-8 p-1 cursor-pointer  bg-white rounded-lg'
									/>
								</a>
							</li>
							<li className=' cursor-pointer hover:scale-[1.1] hover:transition-all hover:duration-500'>
								<a href='https://github.com/chigaemez'>
									<img
										src={github}
										alt=''
										className='w-8 p-1 cursor-pointer  bg-white rounded-lg'
									/>
								</a>
							</li>
							<li className=' cursor-pointer hover:scale-[1.1] hover:transition-all hover:duration-500 '>
								<a href='https://www.linkedin.com/in/orji-christopher'>
									<img
										src={linkedin}
										alt=''
										className='w-8 p-1 cursor-pointer  bg-white rounded-lg'
									/>
								</a>
							</li>
						</ul>

						
					
					</div>
					<Link to='About' spy={true} smooth={true} offset={10} duration={600} className=' justify-center items-center animate-bounce flex cursor-pointer'>
						<BsChevronDoubleDown className='text-4xl  self-center justify-self-center bg-white w-[50px] h-[50px] p-2 rounded-full flex text-orange-500 z-50'/>
						</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
