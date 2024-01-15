import clsx from 'clsx';

import { ButtonProps } from '@homework-task/types';

export const Button = ({
    children,
    onClick,
    className,
    type,
    disabled,
}: ButtonProps) => {
    return (
        <button
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                'hover:bg-primary',
                className
            )}
            disabled={disabled}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
