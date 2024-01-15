import clsx from 'clsx';

export const Title = ({
    title,
    style,
}: {
    title: string;
    style?: string | string[];
}) => {
    return (
        <h1 className={clsx('text-3xl', 'font-bold', 'text-primary', style)}>
            {title}
        </h1>
    );
};
