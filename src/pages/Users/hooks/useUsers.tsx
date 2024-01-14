import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { User } from '@homework-task/types';
import { request } from '@homework-task/utils/api';

export const useUsers = () => {
    return useQuery<User[]>('users', () => request({ url: `/users` }), {
        onError: () => {
            toast.error('Failed to fetch Users');
        },
    });
};
