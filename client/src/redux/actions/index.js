import axios from 'axios';

export const GET_ALL_CLIENTS = 'GET_ALL_CLIENTS';
export const GET_ALL_PROFESSIONALS = 'GET_ALL_PROFESSIONALS';

const API = 'https://fixy-backend.herokuapp.com/';

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
