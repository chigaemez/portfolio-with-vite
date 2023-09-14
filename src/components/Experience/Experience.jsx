import React from 'react'
import {
	FaBriefcase,
	FaJsSquare,
	FaCss3Alt,
	FaHtml5,
	FaPaperclip,
	FaReact,
	FaStaylinked,
	FaBootstrap,
	FaGit,
	FaGitAlt,
	FaGithubAlt,
	FaGithub,
	FaFigma,
	FaNpm,
	FaSlack,
	FaCode,
} from 'react-icons/fa'

const Experience = () => {
	return (
		<div
			className='mt-20 bg-slate-100 py-4 justify-center items-center flex flex-col  '
			id='resume'
		>
			<div className='flex flex-col text-left lg:text-center mt-7'>
				<h1 className='mx-4 text-4xl text-slate-600  font-semibold '>Resume</h1>
				<h1 className='mx-4 text-lg text-slate-600 font-medium my-4'>
					Learn more about my skills, qualifications, and experiences.
				</h1>
				<h1 className='mx-4 text-2xl text-orange-600 font-medium mt-6'>Work Experience</h1>
			</div>
			<div className='flex flex-col lg:w-[60%] '>
				<div className='flex px-4 my-9 lg:ml-14  '>
					<div className='md:flex flex-col  hidden w-[80%] text-right'>
						<p className='text-orange-500 font-medium '>Frontend Engineer</p>
						<p className=' px-1 py-2 rounded-md '> October 2022-Present</p>
					</div>
					<div className='flex '>
						<div className='w-12  h-12 -mr-[24px] z-50  bg-orange-500 rounded-full flex justify-center items-center  '>
							<FaBriefcase className='text-white text-xl' />
						</div>

						<hr className='h-[90vh] lg:h-[40vh] w-1 bg-black flex' />
					</div>

					<div className='flex flex-col ml-6 lg:ml-14 ' data-aos='fade-up'>
						<h1 className='text-xl font-bold flex gap-3'>
							Optikkal Tech <FaPaperclip className='rotate-45 mt-1' />{' '}
						</h1>
						<p className='text-orange-500 font-medium md:hidden'>Frontend Engineer</p>
						<p className='bg-orange-100 px-1 py-2 rounded-md md:hidden'>
							Lagos, Nigeria. October 2022-Present
						</p>

						<p className='bg-orange-100 font-medium text-center w-[140px] hidden md:flex'>
							Lagos, Nigeria
						</p>

						<li className='text-orange-500 my-4'>
							<span className='text-slate-600 lg:text-lg '>
								I've worked on Optikkal Tech, the conpany is an innovative website design, branding
								and ICT company based in Lagos, Nigeria. We work as a team of professional software
								development firms that delivers technology services that can enhance your customers'
								business process.
							</span>
						</li>
						<li className='text-orange-500 mt-6'>
							<span className='text-slate-600 lg:text-lg'>
								During my time here, I've cultivated proficiency in cutting-edge technologies,
								specializing in React, Javascript, Tailwind CSS, and Material UI to design
								components, optimize code, consume APIs, and create documentation to support our
								projects.
							</span>
						</li>
					</div>
				</div>

				<h1 className='mx-4 text-2xl text-orange-600 lg:text-center font-medium my-10'>
					Education
				</h1>

				<div className='flex px-4 mt-9 justify-center w-[]'>
					<div className='md:flex flex-col  hidden  w-[80%] text-right'>
						<p className='text-orange-500 font-medium '>Bsc. Computer Science</p>
						<p className=' px-1 py-2 rounded-md '> October 2022-Present</p>
					</div>
					<div className='flex  '>
						<div className='w-12  h-12 -mr-[24px] z-50  bg-orange-500 rounded-full flex justify-center items-center  '>
							<FaBriefcase className='text-white text-xl' />
						</div>
						<hr className='h-[80vh] lg:h-[35vh] w-1 bg-black flex' />
					</div>
					<div className='flex-col ml-6 lg:ml-14 '>
						<div className='flex flex-col ml-6 ' data-aos='fade-up'>
							<h1 className='text-xl font-bold flex gap-3'>
								nnamdi Azikiwe University <FaPaperclip className='rotate-45 mt-1' />{' '}
							</h1>
							<p className='text-orange-500 font-medium md:hidden'>Bsc. Computer Science</p>
							<p className='bg-orange-100 px-1 py-2 rounded-md md:hidden'>
								Anambra, Nigeria. November 2023-Present
							</p>
							<p className='bg-orange-100 font-medium text-center w-[140px] hidden md:flex'>
								Anambra, Nigeria
							</p>

							<li className='text-orange-500 my-4'>
								<span className='text-slate-600  '>
									My educational journey is characterized by academic excellence and a broad range
									of knowledge. With a CGPA of 4.12 out of 5.0, Am still pursueing my academic
									endeavors with dedication, achieving exceptional results in my quest for
									knowledge.
								</span>
							</li>
							<li className='text-orange-500 mt-6'>
								<span className='text-slate-600 '>
									Relevant Coursework: Computer Programming, Systems Programming, Software
									Development, Machine and Assembly Language, Advanced Calculus, Engineering
									Statistics, Computer Networks, Technical Communication, Data Structures and
									Algorithms.
								</span>
							</li>
						</div>
					</div>
				</div>
				<div className='flex px-4  '>
					<div className='flex   '>
						<div className='md:flex flex-col  hidden  w-[80%] ml-[-20px]  text-right'>
							<p className='text-orange-500 font-medium '>Frontend Engineer</p>
							<p className=' px-1 py-2 rounded-md '> October 2022-Present</p>
						</div>
						<div className='flex    '>
							<div className='w-12  h-12 -mr-[25px] z-50  bg-orange-500 rounded-full flex justify-center items-center  '>
								<FaBriefcase className='text-white text-xl' />
							</div>
							<hr className='h-[40vh] w-1 bg-black flex' />
						</div>
						<div className='flex flex-col ml-8 lg:ml-14 ' data-aos='fade-up'>
							<h1 className='text-xl font-bold flex gap-3'>
								National Institution of Information and Technology{' '}
								<FaPaperclip className='rotate-45 mt-1' />{' '}
							</h1>
							<p className='text-orange-500 font-medium md:hidden'>Frontend Engineer</p>
							<p className='bg-orange-100 px-1 py-2 rounded-md md:hidden'>
								Lagos, Nigeria. November 2023-Present
							</p>
							<p className='bg-orange-100 font-medium text-center w-[140px] hidden md:flex'>
								Lagos, Nigeria
							</p>

							<li className='text-orange-500 my-4'>
								<span className='text-slate-600  '>
									NIIT, a global leader in skills & talent development, established its presence in
									Nigeria by setting up an education centre in Ikeja, Lagos in 1999 and since then
									affirmed its support to prepare the youth in the country for lucrative IT careers.
								</span>
							</li>

							<li className='text-orange-500 mt-7'>
								<span className='text-slate-600 '>HTML</span>
							</li>
							<li className='text-orange-500'>
								<span className='text-slate-600 '>CSS</span>
							</li>
							<li className='text-orange-500'>
								<span className='text-slate-600 '>JAVASCRIPT</span>
							</li>
							<li className='text-orange-500'>
								<span className='text-slate-600 '>JAVA</span>
							</li>
							<li className='text-orange-500'>
								<span className='text-slate-600 '>SQL</span>
							</li>
						</div>
					</div>
				</div>

				<div className=' flex-col justify-start items-center flex  '>
					<div className='lg:text-center text-left'>
						<p className='mx-4 text-2xl text-orange-600  text-left font-medium my-10'>
							Tools & Technologies
						</p>
					</div>
					<div className='flex flex-wrap gap-6 px-4 lg:w-[50%]'>
						<p className='w-[80px] lg:w-[30%] lg:text-lg h-[80px] text-center items-center justify-center flex flex-col rounded-md text-slate-600 bg-slate-200'>
							<FaHtml5 className='text-2xl text-red-500' /> HTML
						</p>
						<p className='w-[80px] lg:w-[30%] lg:text-lg h-[80px] text-center items-center justify-center flex flex-col rounded-md text-slate-600 bg-slate-200'>
							<FaCss3Alt className='text-2xl text-blue-500' />
							CSS
						</p>
						<p className='w-[80px] lg:w-[30%] lg:text-lg h-[80px]  text-center items-center justify-center flex flex-col rounded-md text-slate-600 bg-slate-200'>
							<FaJsSquare className='text-2xl text-yellow-500' />
							Javascrip
						</p>
						<p className='w-[80px] lg:w-[30%] lg:text-lg h-[80px] text-center items-center justify-center flex flex-col rounded-md text-slate-600 bg-slate-200'>
							<FaReact className='text-2xl text-sky-500' />
							React
						</p>
						<p className='w-[80px] lg:w-[30%] lg:text-lg h-[80px] text-center items-center justify-center flex flex-col rounded-md text-slate-600 bg-slate-200'>
							<FaStaylinked />
							Tailwind
						</p>
						<p className='w-[80px] lg:w-[30%] lg:text-lg h-[80px] text-center items-center justify-center flex flex-col rounded-md text-slate-600 bg-slate-200'>
							Redux
						</p>
						<p className='w-[80px] lg:w-[30%] lg:text-lg h-[80px]  text-center items-center justify-center flex flex-col rounded-md text-slate-600 bg-slate-200'>
							<FaBootstrap className='text-2xl text-sky-500' />
							Bootstrap
						</p>
						<p className='w-[80px] lg:w-[30%] lg:text-lg h-[80px]  text-center items-center justify-center flex flex-col rounded-md text-slate-600 bg-slate-200'>
							<FaGitAlt className='text-2xl text-red-500' />
							Git
						</p>
						<p className='w-[80px] lg:w-[30%] lg:text-lg h-[80px]  text-center items-center justify-center flex flex-col rounded-md text-slate-600 bg-slate-200'>
							<FaGithub className='text-2xl text-slate-700' />
							GitHub
						</p>
						<p className='w-[80px] lg:w-[30%] lg:text-lg h-[80px]  text-center items-center justify-center flex flex-col rounded-md text-slate-600 bg-slate-200'>
							<FaFigma className='text-2xl text-slate-700' />
							Figma
						</p>
						<p className='w-[80px] lg:w-[30%] lg:text-lg h-[80px]  text-center items-center justify-center flex flex-col rounded-md text-slate-600 bg-slate-200'>
							<FaSlack className='text-2xl text-red-500' />
							Slack
						</p>
						<p className='w-[80px] lg:w-[30%] lg:text-lg h-[80px]  text-center items-center justify-center flex flex-col rounded-md text-slate-600 bg-slate-200'>
							<FaNpm className='text-2xl text-slate-700 ' />
							NPM
						</p>
						<p className='w-[80px] lg:w-[30%] lg:text-lg h-[80px]  text-center items-center justify-center flex flex-col rounded-md text-slate-600 bg-slate-200'>
							<FaCode className='text-2xl text-slate-700' />
							VSCode
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Experience
