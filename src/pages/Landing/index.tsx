import clsx from 'clsx';

import { Card } from '@homework-task/components';
import { vscodeProjectLink, cards } from '@homework-task/utils/constants';

export const Landing = () => {
    return (
        <section
            className={clsx(
                'bg-cream',
                'min-h-screen',
                'grid',
                'grid-cols-1',
                'lg:grid-cols-landing',
                'gap-16',
                'place-content-center',
                'p-8',
                'sm:p-16'
            )}
        >
            <div
                className={clsx(
                    'flex',
                    'flex-col',
                    'gap-6',
                    'items-start',
                    'self-center',
                    'w-full'
                )}
            >
                <h1
                    className={clsx(
                        'leading-normal',
                        'text-3xl',
                        'xl:text-5xl',
                        'xl:leading-normal',
                        'text-black'
                    )}
                >
                    Welcome to Fat Cat&#39;s{' '}
                    <span className={clsx('text-primary')}>
                        Homework Task Page
                    </span>
                    -where curiosity meets opportunity.
                </h1>
                <p className={clsx('text-gray80', 'text-2xl')}>
                    Don&#39;t hesitate to connect if you have any questions.
                </p>
                <a
                    className={clsx(
                        'flex',
                        'items-center',
                        'gap-2',
                        'rounded-lg',
                        'px-4',
                        'py-2',
                        'bg-black',
                        'text-white'
                    )}
                    href={vscodeProjectLink}
                >
                    <span className={clsx('text-lg')}>Read docs</span>
                    <img src="/media/landing/arrow.svg" alt="" />
                </a>
            </div>
            <img
                className={clsx(
                    'max-w-[600px]',
                    'lg:max-w-none',
                    'w-full',
                    'self-center',
                    'justify-self-center'
                )}
                src="/media/landing/hero.svg"
                alt=""
            />
            <div
                className={clsx(
                    'col-span-full',
                    'grid',
                    'gap-8',
                    'grid-cols-1',
                    'md:grid-cols-2',
                    'xl:grid-cols-4'
                )}
            >
                {cards.map((card) => (
                    <Card key={card.title} {...card} />
                ))}
            </div>
        </section>
    );
};
