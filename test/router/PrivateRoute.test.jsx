import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter } from 'react-router';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Test in <PrivateRoute />', () => {
	test('should show children when logged in', () => {
		Storage.prototype.setItem = jest.fn();

		const contextValue = {
			logged: true,
			user: {
				name: 'Luis',
				id: 2318,
			},
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/testRoute']}>
					<PrivateRoute>
						<p>Text visible only for logged users</p>
					</PrivateRoute>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Text visible only for logged users')).toBeTruthy();
		expect(localStorage.setItem).toHaveBeenCalled();
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/testRoute');
	});
});
