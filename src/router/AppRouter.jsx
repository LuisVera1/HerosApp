import { Routes, Route } from 'react-router';

import LoginPage from '../auth/pages/LoginPage';
import HeroesRoutes from '../heroes/routes/HeroesRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
	return (
		<>
			<Routes>
				7
				<Route
					path="/login"
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>
				<Route
					path="*"
					element={
						<PrivateRoute>
							<HeroesRoutes />
						</PrivateRoute>
					}
				/>
			</Routes>
		</>
	);
};

export default AppRouter;
