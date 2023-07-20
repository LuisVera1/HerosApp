import { types } from '../types/types';

const initialState = {
	logged: false,
	name: 'name',
};

export const authReducer = (state = initialState, action) => {
	switch (action.types) {
		case types.login:
			return {
				...state,
				logged: true,
				user: action.payload,
			};

		case types.logout:
			return {
				logged: false,
			};

		default:
			return state;
	}
};
