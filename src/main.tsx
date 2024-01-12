import React, { Suspense } from 'react';

import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { SuspenseLoader } from '@homework-task/common';
import { routes } from '@homework-task/routes';

import './styles.css';

const queryClient = new QueryClient();

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<SuspenseLoader />}>
                <RouterProvider router={router} />
            </Suspense>
        </QueryClientProvider>
    </React.StrictMode>
);
