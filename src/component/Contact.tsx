
import { motion } from 'framer-motion'
import { Contact } from '../constants'

const Reachout = () => {
	return (
		<div className='border-t border-stone-900 pb-20'>
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 1, y: -100 }}
				transition={{ duration: 0.5 }}
				className='my-10 text-center text-4xl'
			>
				Get in Touch
			</motion.h2>
			<div className='text-center tracking-tighter'>
				<motion.p
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 1 }}
					className='my-4'
				>
					{Contact.address}
				</motion.p>
				<motion.p
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 100 }}
					transition={{ duration: 1 }}
					className='my-4'
				>
					{Contact.phoneNo}
				</motion.p>
				<a href='mailto:christopherorji18@gmail.com' className='border-b'>
					{Contact.email}
				</a>
			</div>
		</div>
	)
}

export default Reachout
