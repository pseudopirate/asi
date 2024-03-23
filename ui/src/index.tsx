import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Player } from './player';
import { QM } from './qm';
import NewQuest from './qm/NewQuest';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Player />
  },
  {
    path: "/master",
    element: <QM />
  },
  {
    path: "/master/new-quest",
    element: <NewQuest />
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{padding: "10px"}}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
