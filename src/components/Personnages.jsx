import { useState } from 'react';
import { personnages, familles } from '../data/donnees';
import ListePersonnages from './ListePersonnages';

const Personnages = () => {
  const [recherche, setRecherche] = useState('');
  const [famille, setFamille] = useState('');

  const filtres = personnages.filter(
    (p) =>
      p.nom.toLowerCase().includes(recherche.trim().toLowerCase()) &&
      (famille === '' || p.famille === famille)
  );

  return (
    <>
      <h1>Tous les personnages</h1>
      <div className="filtres">
        <label>
          Rechercher un nom
          <input type="search" value={recherche} onChange={(e) => setRecherche(e.target.value)} />
        </label>
        <label>
          Famille
          <select value={famille} onChange={(e) => setFamille(e.target.value)}>
            <option value="">Toutes</option>
            {familles.map((f) => (
              <option key={f.slug} value={f.slug}>{f.nom}</option>
            ))}
          </select>
        </label>
      </div>
      <p className="compteur" aria-live="polite">
        {filtres.length} résultat{filtres.length > 1 ? 's' : ''}
      </p>
      <ListePersonnages liste={filtres} />
    </>
  );
};

export default Personnages;
