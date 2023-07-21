import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

describe('test in authReducer.js', () => {
	test('Should return default state', () => {
		const initialState = {
			logged: false,
			name: 'name',
		};

		expect(authReducer(initialState, {})).toEqual(initialState);
	});

	test('Should call to login, and set the user', () => {
		const action = {
			types: types.login,
			payload: 'Luis',
		};

		expect(authReducer({}, action)).toEqual({ logged: true, user: 'Luis' });
	});

	test('Should call to logout, erase de name and toogle to false', () => {
		const action = {
			types: types.logout,
		};

		expect(authReducer({}, action)).toEqual({ logged: false });
	});
});
