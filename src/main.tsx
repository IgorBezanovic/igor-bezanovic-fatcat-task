import React, { Suspense } from 'react';

import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SuspenseLoader } from '@homework-task/common';
import { routes } from '@homework-task/routes';

import '@homework-task/styles.css';
const queryClient = new QueryClient();

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<SuspenseLoader />}>
                <RouterProvider router={router} />
                <ToastContainer />
            </Suspense>
        </QueryClientProvider>
    </React.StrictMode>
);
