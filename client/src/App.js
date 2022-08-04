import { SectionWrapper } from './components';
import Login from './components/Admin/Login/Login';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import headermockup from './assets/headermockup.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<div className='App'>
					<Routes>
						<Route path='/'>
							<Route
								index
								element={
									<SectionWrapper
										title='Ofrece y busca servicios para el mantenimiento del hogar de manera rapida, facil y confiable'
										description='Seas Cliente o Profesional proba nuestra aplicacion y olvidate tener que pedir recomendaciones a todos tu conocidos'
										showBtn
										mockupImg={headermockup}
										banner='banner'
									/>
								}
							/>
							<Route path='login' element={<Login />} />
							<Route path='dashboard' element={<Dashboard />} />
						</Route>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
