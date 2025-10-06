import App from './app.js';
import styles from "./styles/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { initRouter } from './router/router.js';

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(App());
  initRouter();
});
