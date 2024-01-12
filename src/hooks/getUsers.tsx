import axios from 'axios';

import { User } from '@homework-task/types';

import type { AxiosResponse } from 'axios';

export const getUsers = async (): Promise<User[]> => {
    const response: AxiosResponse<User[]> = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    );

    return response.data;
};
