import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { Post } from '@homework-task/types';
import { request } from '@homework-task/utils/api';

export const usePost = () => {
    return useMutation(
        ({ title, body }: Post) =>
            request({
                url: `posts`,
                method: 'post',
                data: {
                    title,
                    body,
                },
            }),
        {
            onSuccess: () => {
                toast.success('Your post is sent.');
            },
            onError: () => {
                toast.error('Failed to send post. Please try again.');
            },
        }
    );
};

export const usePosts = () => {
    return useQuery<Post[]>('posts', () => request({ url: `/posts` }), {
        onError: () => {
            toast.error('Failed to fetch Users');
        },
    });
};
