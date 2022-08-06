import { GET_ALL_CLIENTS, GET_ALL_PROFESSIONALS } from '../actions';

const initialState = {
	users: [],
	clients: [],
	professionals: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_CLIENTS:
			return {
				...state,
				clients: action.payload,
				users: [...state.professionals, ...action.payload],
			};
		case GET_ALL_PROFESSIONALS:
			return {
				...state,
				professionals: action.payload,
				users: [...state.clients, ...action.payload],
			};
		default:
			return state;
	}
};

export default rootReducer;
