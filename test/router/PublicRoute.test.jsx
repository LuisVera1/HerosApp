import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter, Route, Routes } from 'react-router';

describe('Test in <PublicRoute />', () => {
	test('Should show children if isnt logged', () => {
		const contextValue = {
			logged: false,
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<PublicRoute>
					<p>Public route</p>
				</PublicRoute>
			</AuthContext.Provider>
		);

		//screen.debug();
		const text = screen.getByText('Public route');
		expect(screen.getByText('Public route')).toBeTruthy();
	});

	test('Should use Navigate if is logged', () => {
		const contextValue = {
			logged: true,
			user: {
				name: 'Luis',
				id: 2318,
			},
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/login']}>
					<Routes>
						<Route path="/login" element={<p>Public route</p>} />
						<Route path="/" element={<p>Private route</p>} />
					</Routes>

					<PublicRoute />
				</MemoryRouter>
			</AuthContext.Provider>
		);
		// screen.debug();

		expect(screen.getByText('Private route')).toBeTruthy();
	});
});
