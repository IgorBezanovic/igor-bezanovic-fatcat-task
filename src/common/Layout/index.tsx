import React from 'react';

import { Outlet } from 'react-router-dom';

import { Header } from '@homework-task/components';

export const Layout = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    );
};
