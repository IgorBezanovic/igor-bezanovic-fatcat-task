import { Layout } from '@homework-task/common';
import {
    Landing,
    Users,
    Form,
    PageGenerator,
    NotFound,
} from '@homework-task/pages';
import { pageTwo } from '@homework-task/pages/Page/GeneratedPageNd';
import { pageOne } from '@homework-task/pages/Page/GeneratedPageSt';

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: '/users',
                element: <Users />,
            },
            {
                path: '/form-generator',
                element: <Form />,
            },
            {
                path: '/page-generator-one',
                element: <PageGenerator data={pageOne} />,
            },
            {
                path: '/page-generator-two',
                element: <PageGenerator data={pageTwo} />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
];
