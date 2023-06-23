import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const navigate = useNavigate();
	const active = 'nav-item nav-link active';
	const inactive = 'nav-item nav-link';

	const onLogout = () => {
		navigate('/login', { replace: true });
	};

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
			<Link className="navbar-brand" to="/">
				Heroes
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink className={({ isActive }) => (isActive ? active : inactive)} to="/marvel">
						Marvel
					</NavLink>

					<NavLink className={({ isActive }) => (isActive ? active : inactive)} to="/dc">
						DC
					</NavLink>

					<NavLink className={({ isActive }) => (isActive ? active : inactive)} to="/search">
						Search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2  d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-primary">Luis</span>
					<button className="nav-item nav-link btn" onClick={() => onLogout()}>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};
