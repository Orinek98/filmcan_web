// /src/App.js
import Header from './components/Navbar.js';
// import Footer from './components/Footer.js';
// import Home from './components/Home.js';

export default function App() {
  const app = document.createElement('div');
  app.id = 'app';
  app.appendChild(Header());
//   app.appendChild(Home());
//   app.appendChild(Footer());
  return app;
}
