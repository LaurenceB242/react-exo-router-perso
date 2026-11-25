import { Link, useParams } from 'react-router';
import { trouverPersonnage, trouverFamille, maisons } from '../data/donnees';

const Perso = () => {
  const { id } = useParams();
  const perso = trouverPersonnage(id);

  if (!perso) {
    return (
      <>
        <h1>Personnage introuvable</h1>
        <p>Aucun personnage ne correspond à « {id} ». <Link to="/personnages">Retour à la liste</Link></p>
      </>
    );
  }

  const famille = trouverFamille(perso.famille);

  return (
    <article style={{ '--maison': maisons[perso.maison] }}>
      <p className="fil"><Link to="/personnages">Personnages</Link> / {perso.nom}</p>
      <h1 className="nom-perso">{perso.nom}</h1>
      <p className="intro">{perso.description}</p>
      <dl className="fiche">
        <dt>Maison</dt>
        <dd>{perso.maison}</dd>
        <dt>Famille</dt>
        <dd><Link to={`/familles/${famille.slug}`}>{famille.nom}</Link></dd>
      </dl>
    </article>
  );
};

export default Perso;
