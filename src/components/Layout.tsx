import clsx from 'clsx';

import { LayoutProps } from '@homework-task/types';

export const Layout = ({ children, background }: LayoutProps) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
