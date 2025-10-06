import Landing from './components/Landing.js';

export default function App() {
  const app = document.createElement('div');
  app.id = 'app';
  app.className = 'container-fluid vw-100 vh-100 p-0';
  app.appendChild(Landing());

  return app;
}
