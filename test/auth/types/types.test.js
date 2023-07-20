import { types } from '../../../src/auth/types/types';

describe('Test in types file', () => {
	test('Should return login type', () => {
		const loginType = types.login;
		expect(loginType).toBe('[Auth] Login');
	});

	test('Should return logount type', () => {
		const loginType = types.logout;
		expect(loginType).toBe('[Auth] Logout');
	});

	test('Shloud return two types', () => {
		expect(Object.keys(types).length).toBe(2);
	});
});
