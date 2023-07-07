import React from 'react'
import Header from '../Header'
import { useState } from 'react'
import { facebook, github, linkedin, twitter } from '../../assets/icons'

const Contact = () => {
	const [Loading, setIsLoading] = useState(false)

	return (
		<div className='bg-primary5 h-screen'>
			<Header />
			<div className='flex justify-center items-center'>
				<div className=' w-[40%]   px-6 py-6 mt-36 flex flex-col rounded-xl justify-center items-center  bg-white  shadow-2xl'>
					<div className='flex flex-col ml-[-150px] my-3'>
						<label htmlFor=''>Full Name</label>
						<input
							type='text'
							className='w-[160%] h-10 rounded-md px-2 border-2 outline-none'
							placeholder='Please Provide Your Full Name...'
						/>
					</div>
					<div className='flex flex-col ml-[-150px] my-3'>
						<label htmlFor=''> Email Address</label>
						<input
							type='text'
							className='w-[160%] h-10 rounded-md px-2 border-2 outline-none'
							placeholder='Please Provide Your Valid Email...'
						/>
					</div>
					<div className='flex flex-col ml-[-150px] my-3'>
						<label htmlFor=''>Phone</label>
						<input
							type='number'
							className='w-[160%] h-10 rounded-md px-2 border-2 outline-none'
							placeholder='Please Provide Your Phone Number...'
						/>
					</div>
					<div className='flex flex-col ml-[-150px] my-3'>
						<label htmlFor=''>Write A Message </label>
						<textarea
							name=''
							id=''
							className='w-[160%] rounded-md resize-none px-2 border-2 outline-none'
							placeholder='Write Short Message...'
							rows='4'
						></textarea>
					</div>

					<div className='flex flex-col ml-[-10px] justify-center items-center my-3'>
						<button className=' w-[320%] h-10  rounded-md cursor-pointer text-primary5 bg-slate-800 border-none border-2 outline-none'>
							<div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>
							Send Message
						</button>
					</div>
				</div>
				<div className='p-6 bg-white w-20 h-[48vh] shadow-lg  rounded-br-full items-end '>
					<ul>
						<li className='mt-3 cursor-pointer '>
							<a href='https://web.facebook.com/kulture.darlington/about_overview'>
								<img src={facebook} alt='' className='w-10 cursor-pointer' />
							</a>
						</li>
						<li className='mt-10 cursor-pointer'>
							<a href='https://twitter.com/Czarchr60510123'>
								<img src={twitter} alt='' className='w-8 cursor-pointer' />
							</a>
						</li>
						<li className='mt-10 cursor-pointer'>
							<a href='https://github.com/chigaemez'>
								<img src={github} alt='' className='w-8 cursor-pointer' />
							</a>
						</li>
						<li className='mt-10 cursor-pointer'>
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

export default Contact
