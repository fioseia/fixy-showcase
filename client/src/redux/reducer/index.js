import {
	LOGIN_ADMIN,
	GET_ALL_CLIENTS,
	GET_ALL_PROFESSIONALS,
	DISABLE_USER,
	GET_USER,
	DELETE_USER,
	DELETE_REVIEW,
} from '../actions';

const initialState = {
	admin: {},
	users: [],
	clients: [],
	professionals: [],
	user: {},
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_ADMIN:
			return {
				...state,
				admin: action.payload,
			};
		case 'LOGOUT':
			return {
				...state,
				admin: {},
			};
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
		case GET_USER:
			return {
				...state,
				user: action.payload,
			};
		case DISABLE_USER:
			return {
				...state,
			};
		case DELETE_USER:
			return {
				...state,
			};
		case DELETE_REVIEW:
			return {
				...state,
			};
		default:
			return state;
	}
};

export default rootReducer;
