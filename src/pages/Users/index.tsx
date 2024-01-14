import clsx from 'clsx';

import { Hero, UserDetails } from '@homework-task/components';
import { useUsers } from '@homework-task/pages/Users/hooks/useUsers';

export const Users = () => {
    const { data: users, isLoading, isError } = useUsers();

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
