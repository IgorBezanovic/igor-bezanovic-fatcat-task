import clsx from 'clsx';

import { HeroProps } from '@homework-task/types';

export const AboutHero = ({ title, image, style, text }: HeroProps) => {
    return (
        <div
            className={clsx(
                'flex',
                'flex-col',
                'justify-center',
                'items-center',
                'w-11/12',
                'mx-auto',
                'gap-4',
                'h-300',
                'py-5'
            )}
        >
            <div
                className={clsx(
                    'grid',
                    'grid-cols-1',
                    'md:grid-cols-2',
                    'gap-10'
                )}
            >
                <div>
                    <p
                        className={clsx(
                            'text-4xl',
                            'md:text-5xl',
                            'mb-6',
                            style
                        )}
                    >
                        {title}
                    </p>
                    <p
                        className={clsx(
                            'text-3xl',
                            'md:text-4xl',
                            'mb-6',
                            style
                        )}
                    >
                        <strong>{text}</strong>
                    </p>
                </div>
                <div className={clsx('hidden', 'md:block')}>
                    <img
                        src={'media/about-arrow.svg'}
                        className={clsx('mt-6')}
                        height="90%"
                        alt="Arrow"
                        loading="eager"
                    />
                </div>
            </div>
            <div className={clsx('mt-6')}>
                <img
                    src={image}
                    height="100%"
                    alt="AboutHero"
                    loading="eager"
                />
            </div>
        </div>
    );
};
