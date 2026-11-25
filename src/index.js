import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Familles from './components/Familles';
import Famille from './components/Famille';
import ErrorPage from './components/ErrorPage';
import Perso from './components/Perso';
import Personnages from './components/Personnages';

const router = createBrowserRouter([
 {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/familles/',
    element : <Familles/>
  },
  {
    path: '/famille/:type',
    element: <Famille/>
  },
  {
    path: '/perso/:type',
    element: <Perso/>
  },
     {
    path: '/personnages/:type',
    element: <Personnages/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
