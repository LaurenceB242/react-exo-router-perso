import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
  const erreur = useRouteError?.();
  return (
    <main className="page">
      <h1>Cette page n'existe pas</h1>
      <p>
        L'adresse saisie ne mène nulle part{erreur?.status ? ` (erreur ${erreur.status})` : ''}.{' '}
        <Link to="/">Retourner à l'accueil</Link>
      </p>
    </main>
  );
};

export default ErrorPage;
