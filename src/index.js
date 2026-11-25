import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Accueil from './components/Accueil';
import Familles from './components/Familles';
import Famille from './components/Famille';
import Personnages from './components/Personnages';
import Perso from './components/Perso';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Accueil /> },
      { path: 'familles', element: <Familles /> },
      { path: 'familles/:type', element: <Famille /> },
      { path: 'personnages', element: <Personnages /> },
      { path: 'personnages/:id', element: <Perso /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

