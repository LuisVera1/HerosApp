import { Navbar } from '../../ui';
import { Routes, Route, Navigate } from 'react-router';

import DcPage from '../pages/DcPage';
import MarvelPage from '../pages/MarvelPage';
import Search from '../pages/Search';
import HeroPage from '../pages/HeroPage';

export const HeroesRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="marvel" element={<MarvelPage />} />
					<Route path="dc" element={<DcPage />} />

					<Route path="search" element={<Search />} />
					<Route path="hero/:id" element={<HeroPage />} />

					<Route path="*" element={<Navigate to={'/marvel'} />} />
				</Routes>
			</div>
		</>
	);
};
