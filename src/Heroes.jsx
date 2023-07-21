import { AuthProvider } from './auth/context/AuthProvider';
import { AppRouter } from './router/AppRouter';

const Heroes = () => {
	return (
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	);
};

export default Heroes;
