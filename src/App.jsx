import './Main.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page from './Page'
import { useEffect } from 'react'

const AOSInit = ({ children }) => {
	useEffect(() => {
		AOS.init({
			duration: 1200,
			easing: 'ease-in-out-quart',
		})
	}, [])

	return <>{children}</>
}

function App () {
	return (
		<>
			<BrowserRouter>
				<AOSInit>
					<Routes>
						<Route path='/' element={<Page />} />
					</Routes>
				</AOSInit>
			</BrowserRouter>
		</>
	)
}

export default App
