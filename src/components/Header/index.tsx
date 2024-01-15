import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

import { navigationItems } from '@homework-task/utils/constants';

export const Header = () => {
    const location = useLocation();

    return (
        <header
            className={clsx(
                'sticky',
                'inset-x-0',
                'top-0',
                'z-20',
                'bg-cream',
                'shadow',
                'py-5'
            )}
        >
            <div
                className={clsx(
                    'flex',
                    'items-center',
                    'justify-center',
                    'flex-col',
                    'md:flex-row',
                    'flex-1',
                    'gap-x-5',
                    'gap-y-5',
                    'md:gap-y-0',
                    'm-auto',
                    'md:px-4',
                    'max-w-screen-2xl'
                )}
            >
                {navigationItems.map((item) => (
                    <Link
                        key={item.id}
                        className={clsx(
                            'text-black',
                            'leading-normal',
                            'font-medium',
                            'hover:text-primary',
                            { 'text-primary': item.route === location.pathname }
                        )}
                        to={item.route}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </header>
    );
};
