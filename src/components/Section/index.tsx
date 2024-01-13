import clsx from 'clsx';

import { SectionProps } from '@homework-task/types';

export const Layout = ({ children, background }: SectionProps) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
