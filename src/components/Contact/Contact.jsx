import React, { useRef } from 'react'
import { BiMessageAlt } from 'react-icons/bi'
import { FaLocationArrow, FaPhone } from 'react-icons/fa'
import { facebook, github, linkedin, twitter } from '../../assets/icons'
import { useFormik } from 'formik'
import emailjs from '@emailjs/browser'

const Contact = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			firstName: '',
			lastName: '',
			subject: '',
			message: '',
		},
	})

	const form = useRef()

	const sendEmail = e => {
		e.preventDefault()

		emailjs.sendForm('service_ke8upxg', 'template_j9g1gr8', form.current, 'ZVZRtwn2_a4zmp0yX').then(
			result => {
				console.log(result.text)
			},
			error => {
				console.log(error.text)
			}
		)

		e.target.reset()
	}

	return (
		<div className='bg-orange-500  py-10 ' id='contact'>
			<div className='flex flex-col  text-center items-center justify-center '>
				<h2 className='text-3xl mt-10  text-slate-200 font-bold text-center '>Contact</h2>
				<hr className='w-16 bg-slate-300 h-2 rounded-full animate-bounce duration-500 text-center mt-3 ' />
			</div>
			<div className='flex flex-col md:flex-row justify-center gap-11 items-center w-[100%]'>
				<div className=' px-3   py-6 lg:w-[30%] md:w-[100%]   flex flex-col rounded-xl justify-center items-center '>
					<form ref={form} onSubmit={sendEmail}>
						<div className='flex flex-col md:flex-row w-full md:justify-center gap-16  mt-7'>
							<div className='flex flex-col'>
								<label htmlFor='' className='text-lg'>
									First Name
								</label>
								<input
									type='text'
									className='w-full text-lg  font-semibold  rounded-md border h-11 px-4 outline-none'
									name='user_name'
									required
								/>
							</div>

							<div className='flex flex-col'>
								<label htmlFor='' className='text-lg'>
									Last Name
								</label>
								<input
									type='text'
									className='flex  text-lg w-full font-semibold  rounded-md border h-11 px-4 outline-none'
									name='user_name'
									required
								/>
							</div>
						</div>

						<div className='w-full mt-4'>
							<div className='flex flex-wrap gap-4'>
								<label htmlFor='' className='text-lg'>
									Email
								</label>
								<input
									
									type='email'
									name='user_email'
									className='w-full  text-lg   rounded-md border h-11 px-4 outline-none font-medium'
									required
								/>
								<label htmlFor='' className='text-lg'>
									Subject
								</label>
								<input
									type='text'
									className='w-full  text-lg   rounded-md border h-11 px-4 outline-none font-medium'
									required
									name='subject'
								/>
							</div>
						</div>

						<div className='flex flex-col w-[100%] my-3'>
							<label htmlFor='' className='text-lg'>
								Write A Message{' '}
							</label>
							<textarea
								name='message'
								id=''
								className='w-[100%] text-lg  font-semibold rounded-md resize-none px-2 border-2 outline-none'
								placeholder='Write Short Message...'
								rows='4'
								required
							></textarea>
						</div>

						<div className='flex w-full flex-col  justify-center items-center my-3'>
							<button className=' w-full font-semibold  h-12  rounded-md cursor-pointer text-slate-600 bg-white border-none border-2 outline-none'>
								Send Message
							</button>
						</div>
					</form>
				</div>

				<div className='flex flex-col  w-[90%] lg:w-[30%]  '>
					<h1 className='text-3xl mt-10  text-slate-200 font-bold'>Get In Touch</h1>
					<p className='text-white text-lg font-medium '>
						I am a web developer who is dedicated to providing high-quality, user-friendly websites
						and web applications. I am committed to ensuring that you are completely satisfied with
						your project.
					</p>
					<p className='text-white mt-4 text-lg font-medium '>
						I will personally review your message within 24 hours and provide you with a tailored
						solution that meets your specific requirements. Thank you for your trust!
					</p>
					<ul className='my-4 text-lg '>
						<li className='flex justify-start items-center gap-2 text-slate-100 text-lg lg:text-lg'>
							<FaLocationArrow /> Lagos.Nigeria{' '}
						</li>
						<li className='flex justify-start items-center gap-2 py-3 text-slate-100 text-lg lg:text-lg'>
							<FaPhone />{' '}
							<a href='tel:+2349122174699' className='text-slate-100 text-lg lg:text-lg'>
								(+234) <span>9122174699</span>
							</a>
						</li>
						<li className='flex justify-start items-center gap-2 '>
							<BiMessageAlt className='text-slate-300 text-lg lg:text-lg' />{' '}
							<a
								className='text-slate-300 text-lg lg:text-lg'
								href='mailto:christopherorji18@gmail.com'
							>
								christopherorji18@gmail.com
							</a>
						</li>
					</ul>
					<ul className='gap-5 flex flex-row py-4'>
						<li className=' cursor-pointer hover:scale-[1.1] hover:transition-all hover:duration-500 '>
							<a href='https://web.facebook.com/kulture.darlington/about_overview'>
								<img src={facebook} alt='' className='w-8 cursor-pointer bg-white rounded-lg' />
							</a>
						</li>
						<li className=' cursor-pointer hover:scale-[1.1] hover:transition-all hover:duration-500'>
							<a href='https://twitter.com/Czarchr60510123'>
								<img src={twitter} alt='' className='w-8 p-1 cursor-pointer  bg-white rounded-lg' />
							</a>
						</li>
						<li className=' cursor-pointer hover:scale-[1.1] hover:transition-all hover:duration-500'>
							<a href='https://github.com/chigaemez'>
								<img src={github} alt='' className='w-8 p-1 cursor-pointer  bg-white rounded-lg' />
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
			</div>
		</div>
	)
}

export default Contact
