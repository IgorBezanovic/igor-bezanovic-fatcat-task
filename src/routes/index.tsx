import { Layout } from '@homework-task/common';
import { Landing, Users, Form } from '@homework-task/pages';

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
                path: '/page-generator',
                element: <Users />,
            },
        ],
    },
    {
        path: '/error',
        element: <Users />,
    },
    {
        path: '*',
        element: <Users />,
    },
];
