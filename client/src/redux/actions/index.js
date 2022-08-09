import axios from 'axios';

export const LOGIN_ADMIN = 'LOGIN_ADMIN';
export const GET_ALL_CLIENTS = 'GET_ALL_CLIENTS';
export const GET_ALL_PROFESSIONALS = 'GET_ALL_PROFESSIONALS';
export const GET_USER = 'GET_USER';
export const DISABLE_USER = 'DISABLE_USER';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_REVIEW = 'DELETE_REVIEW';

const API = 'https://fixy-backend.herokuapp.com/';
// const API = 'http://localhost:3001/';

export const loginAdmin = (email, password) => (dispatch) => {
	axios
		.post(`${API}admin/login`, { email, password })
		.then((res) => {
			dispatch({
				type: LOGIN_ADMIN,
				payload: res.data,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getAllClients = () => (dispatch) => {
	axios
		.get(`${API}client`)
		.then((res) => {
			dispatch({
				type: GET_ALL_CLIENTS,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

export const getAllProfessionals = () => (dispatch) => {
	axios
		.get(`${API}professional`)
		.then((res) => {
			dispatch({
				type: GET_ALL_PROFESSIONALS,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

export const getUser = (id) => (dispatch) => {
	axios
		.get(`${API}admin/${id}`)
		.then((res) => {
			dispatch({
				type: GET_USER,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

export const disableUser = (id) => (dispatch) => {
	axios
		.put(`${API}admin/${id}`)
		.then((res) => {
			dispatch({
				type: DISABLE_USER,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

export const deleteUser = (id) => (dispatch) => {
	axios
		.delete(`${API}admin/delete/${id}`)
		.then((res) => {
			dispatch({
				type: DELETE_USER,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

export const deleteReview = (payload) => (dispatch) => {
	axios
		.put(`${API}admin/delete/review`, payload)
		.then((res) => {
			dispatch({
				type: DELETE_REVIEW,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};
