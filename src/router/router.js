// /src/router/router.js
import Home from '../components/Home.js';
import About from '../components/About.js';

const routes = {
  '/': Home,
  '/about': About,
};

export default function router() {
  const path = location.hash.replace('#', '') || '/';
  const view = routes[path];
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view());
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
