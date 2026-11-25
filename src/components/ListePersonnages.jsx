import { Link } from 'react-router';
import { maisons } from '../data/donnees';

const ListePersonnages = ({ liste }) => {
  if (liste.length === 0) {
    return <p className="vide">Aucun personnage ne correspond. Modifiez la recherche ou le filtre.</p>;
  }
  return (
    <ul className="liste">
      {liste.map((p) => (
        <li key={p.id} className="ligne" style={{ '--maison': maisons[p.maison] }}>
          <Link to={`/personnages/${p.id}`}>
            <strong>{p.nom}</strong>
            <span>{p.maison}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListePersonnages;
