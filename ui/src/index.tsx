import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Player } from './player';
import { QM } from './qm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Player />
  },
  {
    path: "/master",
    element: <QM />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
