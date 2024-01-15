import { FormEventHandler } from 'react';

import { UseFormRegister, FormState } from 'react-hook-form';

import { Post } from '@homework-task/types';

export type RenderFormFunctions = (args: {
    register: UseFormRegister<Post>;
    handleSubmit: FormEventHandler<HTMLFormElement>;
    formState: FormState<Post>;
    isLoading: boolean;
}) => React.ReactNode;
