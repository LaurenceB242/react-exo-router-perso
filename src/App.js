import './App.css';
import { NavLink, Outlet } from 'react-router';

const lienClasse = ({ isActive }) => (isActive ? 'actif' : undefined);

function App() {
  return (
    <>
      <header className="entete">
        <NavLink to="/" className="marque">Registre de Poudlard</NavLink>
        <nav aria-label="Navigation principale">
          <NavLink to="/familles" className={lienClasse}>Familles</NavLink>
          <NavLink to="/personnages" className={lienClasse}>Personnages</NavLink>
        </nav>
      </header>
      <main className="page">
        <Outlet />
      </main>
    </>
  );
}

export default App;
