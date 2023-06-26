import { Link } from 'react-router-dom';

import PageRoutes from './routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pokédex</h1>
      <nav>
        <Link className="link" to="/">
          {`Home`}
        </Link>
        <Link className="link" to="/about">
          {`About`}
        </Link>
        <Link className="link" to="/favorites">
          {`Favorite Pokémon`}
        </Link>
      </nav>
      <PageRoutes />
    </div>
  );
}

export default App;
