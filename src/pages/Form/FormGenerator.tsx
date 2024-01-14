import { FormEventHandler } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { usePost } from '@homework-task/pages/Form/hooks/usePost';
import { FormGeneratorProps, Post } from '@homework-task/types';
import { schema } from '@homework-task/validations/posts';

export const FormGenerator = ({ renderForm }: FormGeneratorProps) => {
    const { mutate: post, isLoading } = usePost();

    const { register, handleSubmit, formState, reset } = useForm<Post>({
        defaultValues: {
            title: '',
            body: '',
        },
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: Post) => {
        post(data);
        reset();
    };

    return renderForm({
        register,
        handleSubmit: handleSubmit(
            onSubmit
        ) as FormEventHandler<HTMLFormElement>,
        formState,
        isLoading,
    });
};
