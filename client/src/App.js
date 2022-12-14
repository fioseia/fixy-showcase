import { SectionWrapper } from './components';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import Login from './components/Admin/Login/Login';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import headermockup from './assets/headermockup.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reports from './components/Admin/Reports/Reports';
import Users from './components/Admin/Users/Users';
import UserDetail from './components/Admin/UserDetail/UserDetail';
import { useEffect } from 'react';
import { getUserWithToken } from './redux/actions';
import ReportDetail from './components/Admin/ReportDetail/ReportDetail';

function App() {
	const dispatch = useDispatch();

	const token = localStorage.getItem('token');

	useEffect(() => {
		if (token) {
			dispatch(getUserWithToken(token));
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className='App'>
					<Routes>
						<Route path='/'>
							<Route
								index
								path='/'
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
						</Route>
						<Route path='admin'>
							<Route index path='login' element={<Login />} />
							<Route path='dashboard' element={<Dashboard token={token} />} />
							<Route path='users' element={<Users token={token} />} />
							<Route path='users/:id' element={<UserDetail token={token} />} />
							<Route path='reports' element={<Reports token={token} />} />
							<Route
								path='report/:idUser/:idReview'
								element={<ReportDetail token={token} />}
							/>
						</Route>
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
