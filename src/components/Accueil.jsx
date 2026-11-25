import { Link } from 'react-router';
import { personnages, familles } from '../data/donnees';

const Accueil = () => (
  <>
    <h1 className="titre-accueil">Qui est entré à Poudlard ?</h1>
    <p className="intro">
      Parcourez {personnages.length} élèves, classés selon l'origine de leur famille magique.
    </p>
    <div className="actions">
      <Link className="bouton" to="/personnages">Voir tous les personnages</Link>
      <Link className="bouton secondaire" to="/familles">Explorer les familles</Link>
    </div>
    <ul className="raccourcis">
      {familles.map((f) => (
        <li key={f.slug}><Link to={`/familles/${f.slug}`}>{f.nom}</Link></li>
      ))}
    </ul>
  </>
);

export default Accueil;
