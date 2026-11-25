import { Link } from 'react-router';
import { familles, personnages } from '../data/donnees';

const Familles = () => (
  <>
    <h1>Les familles</h1>
    <ul className="liste">
      {familles.map((f) => {
        const n = personnages.filter((p) => p.famille === f.slug).length;
        return (
          <li key={f.slug} className="ligne">
            <Link to={`/familles/${f.slug}`}>
              <strong>{f.nom}</strong>
              <span>{f.resume}</span>
              <small>{n} personnage{n > 1 ? 's' : ''}</small>
            </Link>
          </li>
        );
      })}
    </ul>
  </>
);

export default Familles;
