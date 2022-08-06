import { SectionWrapper } from './components';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Admin/Login/Login';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import headermockup from './assets/headermockup.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reports from './components/Admin/Reports/Reports';
import Users from './components/Admin/Users/Users';
import SideBar from './components/Admin/Dashboard/SideBar';

function App() {
	return (
		<>
			<Provider store={store}>
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
								<Route path='admin'>
									<Route path='dashboard' element={<Dashboard />} />
									<Route path='login' element={<Login />} />
									<Route path='users' element={<Users />} />
									<Route path='reports' element={<Reports />} />
								</Route>
							</Route>
						</Routes>
					</div>
				</Router>
			</Provider>
		</>
	);
}

export default App;
