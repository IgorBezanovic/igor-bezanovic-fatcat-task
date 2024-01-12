import clsx from 'clsx';

import { User } from '@homework-task/types';
import { userDetail } from '@homework-task/utils/constants';

export const UserDetails = ({ userDetails }: { userDetails: User }) => (
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
        {userDetail.map((details) => (
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
                    {userDetails[details.property as keyof typeof userDetails]}
                </span>
            </p>
        ))}
    </li>
);
