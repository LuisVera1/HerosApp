import { fireEvent, render, screen } from '@testing-library/react';
import Search from '../../../src/heroes/pages/Search';
import { MemoryRouter } from 'react-router';

const MockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => MockedUseNavigate,
}));

describe('Test in <Search />', () => {
	beforeEach(() => jest.clearAllMocks());

	test('should show default values', () => {
		const { container } = render(
			<MemoryRouter>
				<Search />
			</MemoryRouter>
		);

		expect(container).toMatchSnapshot();
	});

	test('should show batman and the input and empty value', () => {
		render(
			<MemoryRouter initialEntries={['/search?q=batman']}>
				<Search />
			</MemoryRouter>
		);

		const input = screen.getByRole('textbox');
		expect(input).not.toContain('batman');

		const h5tag = screen.getByTestId('superHeroName');
		expect(h5tag).toBeTruthy();

		expect(() => screen.getByTestId('noHeroBox')).toThrow('Unable to find an element');
	});

	test('Should show an error if hero is not found', () => {
		render(
			<MemoryRouter initialEntries={['/search?q=malcom']}>
				<Search />
			</MemoryRouter>
		);

		const noHeroBox = screen.getByTestId('noHeroBox');
		expect(noHeroBox).toBeTruthy();
	});

	test('Should call Navigate to new screen', () => {
		render(
			<MemoryRouter initialEntries={['/search']}>
				<Search />
			</MemoryRouter>
		);

		const input = screen.getByRole('textbox');
		fireEvent.input(input, { target: { value: 'batman' } });
		// input.value = batman
		const form = screen.getByRole('form');
		fireEvent.submit(form);
		expect(MockedUseNavigate).toHaveBeenCalledWith('?q=batman');
	});
});
