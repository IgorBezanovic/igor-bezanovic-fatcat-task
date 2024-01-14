import axios from 'axios';

import type { AxiosResponse, AxiosError } from 'axios';

export const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL as string,
});

export const request = async ({ ...options }) => {
    const onSuccess = (response: AxiosResponse) => response.data;
    const onError = (error: AxiosError) => {
        throw error;
    };

    return client(options).then(onSuccess).catch(onError);
};
