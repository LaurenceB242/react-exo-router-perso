import { Link, useParams } from 'react-router';
import { trouverFamille, personnages } from '../data/donnees';
import ListePersonnages from './ListePersonnages';

const Famille = () => {
  const { type } = useParams();
  const famille = trouverFamille(type);

  if (!famille) {
    return (
      <>
        <h1>Famille introuvable</h1>
        <p>Aucune famille ne porte le nom « {type} ». <Link to="/familles">Voir toutes les familles</Link></p>
      </>
    );
  }

  return (
    <>
      <p className="fil"><Link to="/familles">Familles</Link> / {famille.nom}</p>
      <h1>{famille.nom}</h1>
      <p className="intro">{famille.resume}</p>
      <ListePersonnages liste={personnages.filter((p) => p.famille === type)} />
    </>
  );
};

export default Famille;
