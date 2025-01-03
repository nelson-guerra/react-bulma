import { ReactNode } from 'react';

export function Layout({ children }: { children?: ReactNode }) {
	return (
		<div className="container">
			<div className="hero is-fullheight">
				<header className="hero-head has-text-centered">
					<p className="title is-5 pt-2">Pacientes</p>
				</header>

				<div className="hero-body py-4">
					<div className="container">{children}</div>
				</div>

				<footer className="hero-foo has-text-centered">
					<p className="subtitle is-6 pb-2">© 2025</p>
				</footer>
			</div>
		</div>
	);
}
