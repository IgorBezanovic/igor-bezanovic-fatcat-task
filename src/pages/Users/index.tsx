import clsx from 'clsx';
import { useQuery } from 'react-query';

import { Hero, UserDetails } from '@homework-task/components';
import { getUsers } from '@homework-task/hooks/getUsers';

export const Users = () => {
    const { data: users, isLoading, isError } = useQuery('users', getUsers);

    return (
        <div>
            <Hero title="User List" image="media/hero.png" />
            {isLoading ? (
                <p>Loading...</p>
            ) : isError ? (
                <p>Error fetching data</p>
            ) : (
                <div className={clsx('p-5')}>
                    <ul
                        className={clsx(
                            'grid',
                            'grid-cols-2',
                            'md:grid-cols-3',
                            'lg:grid-cols-4',
                            'gap-5'
                        )}
                    >
                        {users &&
                            users.length &&
                            users.map((user) => (
                                <UserDetails key={user.id} user={user} />
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
