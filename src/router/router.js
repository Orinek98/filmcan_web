import App from "../app";
import ShortFilm from '../pages/short_film.js';
import Videoclip from '../pages/videoclip.js';
// Simple client-side router for 4 paths

const routes = {
	'/': 'APP_COMPONENT',
	'/short_film': 'SHORT_FILM_COMPONENT',
	'/videoclip': 'VIDEOLCIP_COMPONENT',
	'/live_session': '<h1>Live Session Page</h1><p>Join our live sessions!</p>',
	'/contact': '<h1>Contact Page</h1><p>Contact us for more information.</p>'
};


function renderRoute(path) {
	const app = document.getElementById('app');
	if (!app) return;
	if (path === '/') {
		app.innerHTML = '';
		const appComponent = App();
		if (appComponent.id === 'app') {
			app.replaceWith(appComponent);
		} else {
			app.appendChild(appComponent);
		}
		return;
	}
	if (path === '/short_film') {
		app.innerHTML = '';
		app.appendChild(ShortFilm());
		return;
	}
	if (path === '/videoclip') {
		app.innerHTML = '';
		app.appendChild(Videoclip());
		return;
	}
	app.innerHTML = routes[path] || '<h1>404 - Page Not Found</h1>';
}

function handleNavigation(event) {
	if (event.target.tagName === 'A' && event.target.href) {
		const url = new URL(event.target.href);
		const path = url.pathname;
		if (routes[path]) {
			event.preventDefault();
			window.history.pushState({}, '', path);
			renderRoute(path);
		}
	}
}

window.addEventListener('popstate', () => {
	renderRoute(window.location.pathname);
});

export function initRouter() {
	document.body.addEventListener('click', handleNavigation);
	renderRoute(window.location.pathname);
}
