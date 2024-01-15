import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import { Button } from '@homework-task/components';

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <section
            className={clsx(
                'bg-cream',
                'min-h-screen',
                'flex',
                'justify-center'
            )}
        >
            <div
                className={clsx(
                    'flex',
                    'justify-center',
                    'flex-col',
                    'w-8/12',
                    'items-center'
                )}
            >
                <img
                    src={'media/NotFoundImage.svg'}
                    height="100%"
                    alt="Hero"
                    loading="eager"
                />
                <p className={clsx('mt-10', 'text-4xl')}>Oops!</p>
                <p className={clsx('my-10', 'text-xl', 'text-center')}>
                    Page not found. Please check the URL or navigateback to our
                    homepage.
                </p>
                <Button
                    className={[
                        'max-w-40',
                        'flex',
                        'items-center',
                        'justify-center',
                    ]}
                    onClick={() => navigate('/')}
                >
                    Go home
                    <img
                        src={'media/landing/arrow.svg'}
                        height="100%"
                        alt="Hero"
                        loading="eager"
                        className={clsx('ml-2')}
                    />
                </Button>
            </div>
        </section>
    );
};
