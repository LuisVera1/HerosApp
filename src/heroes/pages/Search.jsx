import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useform';
import HeroCard from '../components/HeroCard';
import { getHeroesByName } from '../helpers/getHeroesByName';

const Search = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { q = '' } = queryString.parse(location.search);
	const heroes = getHeroesByName(q);

	// const { searchText, onInputChange, onResetForm } = useForm({ searchText: q });
	const { searchText, onInputChange, onResetForm } = useForm({ searchText: '' });
	// const [searchParams, setSearchParams] = useSearchParams('');
	// const query = searchParams.get('q');

	const onSearchSubmit = (event) => {
		console.log('click');

		event.preventDefault();
		if (searchText.trim().length <= 1) return;

		onResetForm();
		navigate(`?q=${searchText}`);
		// setSearchParams({ q: searchText });
	};

	return (
		<>
			<h1>Search</h1>
			<hr />

			<div className="row">
				<div className="col-5">
					<h5>Searching</h5>
					<hr />
					<form onSubmit={onSearchSubmit}>
						<input
							type="text"
							placeholder="Search a hero"
							className="form-control"
							name="searchText"
							autoComplete="off"
							value={searchText}
							onChange={onInputChange}
						/>
						<button className="btn btn-outline-primary mt-1">Search</button>
					</form>
				</div>

				<div className="col-7">
					<h4>Results</h4>
					<hr />

					{q === '' && <div className="alert alert-primary">Search a hero</div>}

					{heroes.length === 0 && (
						<div className="alert alert-danger">
							No hero with <b>{q}</b>
						</div>
					)}

					{heroes.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</>
	);
};

export default Search;
