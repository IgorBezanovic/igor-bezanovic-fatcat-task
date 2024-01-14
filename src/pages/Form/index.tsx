import React from 'react';

import clsx from 'clsx';

import {
    Button,
    ItemsShowcase,
    Section,
    Title,
    TrustBar,
} from '@homework-task/components';
import { FormGenerator } from '@homework-task/pages/Form/FormGenerator';
import { usePosts } from '@homework-task/pages/Form/hooks/usePost';
import { RenderFormFunctions } from '@homework-task/types/renderFormFunctions';
import { images } from '@homework-task/utils/constants';

export const Form = () => {
    const { data: posts, isLoading, isError } = usePosts();

    const renderForm: RenderFormFunctions = ({
        register,
        handleSubmit,
        formState,
        isLoading,
    }) => (
        <form onSubmit={handleSubmit} className={clsx('my-8')}>
            <div className={clsx('mb-5')}>
                <div className={clsx('flex', 'flex-col', 'mb-5')}>
                    <label
                        htmlFor="title"
                        className={clsx('mb-2', 'text-lg', 'md:text-xl')}
                    >
                        Title:
                    </label>
                    <input
                        className={clsx(
                            'mb-1',
                            'p-2',
                            'outline-none',
                            'border-2',
                            'border-solid',
                            'rounded-md',
                            'shadow-md'
                        )}
                        {...register('title')}
                        type="text"
                        id="title"
                        disabled={isLoading}
                    />
                    {formState.errors.title && (
                        <p
                            className={clsx(
                                'text-[color:red]',
                                'italic',
                                'text-sm'
                            )}
                        >
                            * {formState.errors.title.message as string}
                        </p>
                    )}
                </div>
                <div className={clsx('flex', 'flex-col')}>
                    <label
                        htmlFor="body"
                        className={clsx('mb-2', 'text-lg', 'md:text-xl')}
                    >
                        Body:
                    </label>
                    <textarea
                        className={clsx(
                            'mb-1',
                            'p-2',
                            'resize-none',
                            'outline-none',
                            'border-2',
                            'border-solid',
                            'rounded-md',
                            'shadow-md',
                            'h-40'
                        )}
                        {...register('body')}
                        id="body"
                        disabled={isLoading}
                    />
                </div>
                {formState.errors.body && (
                    <p
                        className={clsx(
                            'text-[color:red]',
                            'italic',
                            'text-sm'
                        )}
                    >
                        * {formState.errors.body.message as string}
                    </p>
                )}
            </div>
            <Button type={'submit'} disabled={isLoading}>
                Submit
            </Button>
        </form>
    );

    return (
        <React.Fragment>
            <Section background="bg-cream">
                <div className={clsx('w-11/12', 'md:w-1/2', 'mx-auto')}>
                    <div className={clsx('w-full')}>
                        <Title title={'Send a new post'} />
                        <FormGenerator renderForm={renderForm} />
                    </div>
                </div>
            </Section>
            <TrustBar images={images} />
            {isLoading ? (
                <p>Loading...</p>
            ) : isError ? (
                <p>Error fetching data</p>
            ) : (
                <Section background="bg-cream">
                    <div className={clsx('w-8/12', 'mx-auto', 'mb-14')}>
                        <Title title={'All posts'} />
                    </div>
                    <ItemsShowcase items={posts!} />
                </Section>
            )}
        </React.Fragment>
    );
};
