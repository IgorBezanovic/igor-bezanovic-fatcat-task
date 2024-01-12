import clsx from 'clsx';
import { useQuery } from 'react-query';

import { Hero } from '@homework-task/components/Hero';
import { getUsers } from '@homework-task/hooks/getUsers';

import { UserDetails } from './UserDetails';

export const Users = () => {
    const { data: users, isLoading, isError } = useQuery('users', getUsers);

    return (
        <div>
            <Hero title="User List" image="public/media/hero.png" />
            {isLoading ? (
                <p>Loading...</p>
            ) : isError ? (
                <p>Error fetching data</p>
            ) : (
                <div className={clsx('p-5')}>
                    <ul
                        className={clsx(
                            'grid',
                            'grid-cols-2', // Default: 2 columns
                            'md:grid-cols-3', // 3 columns for medium screens and larger
                            'lg:grid-cols-4',
                            'gap-5'
                        )}
                    >
                        {users &&
                            users.length &&
                            users.map((userDetails) => (
                                <UserDetails
                                    key={userDetails.id}
                                    userDetails={userDetails}
                                />
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
