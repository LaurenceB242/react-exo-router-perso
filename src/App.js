import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

function App() {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/familles">Toute les familles</Link></li>
        <li><Link to="/famille/Moldu">Type de Famille</Link></li>
        <li><Link to="/perso/Hermione">Personnages nom</Link></li>
        <li><Link to="/personnages/Ron">Les Personnages</Link></li>
      </ul>
    </>
  );
}

export default App;