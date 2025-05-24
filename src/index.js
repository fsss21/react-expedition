import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './styles/index.scss';

import MainPage from './Pages/MainPage/index.jsx';
import Preview from './Pages/Preview/Preview.jsx';
import GamesPage from './Pages/GamesPage/index.jsx';
import FilmsPage from './Pages/FilmsPage/index.jsx';
import HistoricalPage from './Pages/HistoricalPage/index.jsx';

import NovosibirskPage from './Pages/HistoricalPage/NovosibirskPage/index.jsx';
import KrasinPage from './Pages/HistoricalPage/KrasinPage/index.jsx';
import FrankPage from './Pages/HistoricalPage/FrankPage/index.jsx';
import NorthernPage from './Pages/HistoricalPage/NorthernPage/index.jsx';
import OttoPage from './Pages/HistoricalPage/OttoPage/index.jsx';
import CheluskinPage from './Pages/HistoricalPage/CheluskinPage/index.jsx';
import VodopyanovPage from './Pages/HistoricalPage/VodopyanovPage/index.jsx';
import PapaninPage from './Pages/HistoricalPage/PapaninPage/index.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Preview />,
    },
    {
        path: 'main',
        element: <MainPage />,
    },
    {
        path: 'history',
        element: <HistoricalPage />,
    },
    {
        path: 'novosibirsk',
        element: <NovosibirskPage />,
    },
    {
        path: 'krasin',
        element: <KrasinPage />,
    },
    {
        path: 'frank',
        element: <FrankPage />,
    },
    {
        path: 'northern',
        element: <NorthernPage />,
    },
    {
        path: 'otto',
        element: <OttoPage />,
    },
    {
        path: 'cheluskin',
        element: <CheluskinPage />,
    },
    {
        path: 'vodopyanov',
        element: <VodopyanovPage />,
    },
    {
        path: 'papanin',
        element: <PapaninPage />,
    },
    // {
    //     path: 'personali',
    //     children: [
    //         {
    //             index: true,
    //             element: <PersonaliPage />,
    //         },
    //         {
    //             path: ':id',
    //             element: <PersonDetail />,
    //         },
    //     ],
    // },
    {
        path: 'films',
        element: <FilmsPage />,
    },
    {
        path: 'games',
        element: <GamesPage />,
    },
    {
        path: '*',
        element: <div>Страница не найдена</div>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
