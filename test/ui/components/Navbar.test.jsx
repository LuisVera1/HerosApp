import { fireEvent, render, screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/Navbar';
import { MemoryRouter } from 'react-router-dom';

const MockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => MockedUseNavigate,
}));

describe('Test in <Navbar />', () => {
	const logoutMock = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('Should show name of user', () => {
		const userName = 'Oliver';
		const contextValue = {
			logged: true,
			user: {
				name: userName,
				id: 123,
			},
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/marvel']}>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(screen.getByText(userName)).toBeTruthy();
	});

	test('Should call logout/ function and useNavigate', () => {
		const contextValue = {
			logged: true,
			user: {
				name: 'Luis',
				id: 123,
			},
			logout: logoutMock,
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/marvel']}>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		const logoutBtn = screen.getByRole('button', { name: 'Logout' });
		fireEvent.click(logoutBtn);

		expect(logoutMock).toHaveBeenCalled();
		expect(MockedUseNavigate).toHaveBeenCalled();

		expect(MockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
	});
});
