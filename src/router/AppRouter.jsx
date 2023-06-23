import { Routes, Route } from 'react-router';

import LoginPage from '../auth/pages/LoginPage';
import HeroesRoutes from '../heroes/routes/HeroesRoutes';

const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="login" element={<LoginPage />} />

				<Route path="*" element={<HeroesRoutes />} />
			</Routes>
		</>
	);
};

export default AppRouter;
