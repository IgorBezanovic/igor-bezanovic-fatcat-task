import clsx from 'clsx';

import { User } from '@homework-task/types';
import { userDetails } from '@homework-task/utils/constants';

export const UserDetails = ({ user }: { user: User }) => (
    <li
        className={clsx(
            'flex',
            'flex-col',
            'gap-4',
            'bg-white',
            'py-6',
            'px-4',
            'rounded-2xl',
            'shadow'
        )}
    >
        {userDetails.map((details) => (
            <p
                key={details.id}
                className={clsx(
                    'flex',
                    'justify-start',
                    'items-center',
                    'text-gray80',
                    'text-base',
                    'leading-relaxed'
                )}
            >
                <details.icon />
                <span className={clsx('pl-5', 'break-all', 'text-sm')}>
                    {user[details.property as keyof typeof user]}
                </span>
            </p>
        ))}
    </li>
);
