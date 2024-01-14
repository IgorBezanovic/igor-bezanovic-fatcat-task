import clsx from 'clsx';

export const Title = ({ title }: { title: string }) => {
    return <h1 className={clsx('text-3xl', 'font-bold')}>{title}</h1>;
};
