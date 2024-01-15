import clsx from 'clsx';

import { Title } from '@homework-task/components';
import { HeroProps } from '@homework-task/types';
import { hiringWorldwideItems } from '@homework-task/utils/constants';

export const HiringWorldwide = ({ title, image, style }: HeroProps) => {
    return (
        <div className={clsx('w-full', 'text-center')}>
            <div className={clsx(style)}>
                <Title title={title} />
                <p className={clsx('my-10', 'text-3xl', 'w-4/5', 'mx-auto')}>
                    We prioritize our
                    <span className={clsx('text-primary')}>
                        {' '}
                        clients&apos; satisfaction
                    </span>
                    , and our success is measured by their success. That’s why
                    we are trusted all over the world.
                </p>
            </div>
            <div
                className={clsx(
                    'grid',
                    'grid-cols-2',
                    'md:grid-cols-4',
                    'mb-10'
                )}
            >
                {hiringWorldwideItems.map((item) => (
                    <div className={clsx('my-10')} key={item.id}>
                        <p
                            className={clsx(
                                'text-black',
                                'text-4xl',
                                'mb-2',
                                'font-medium'
                            )}
                        >
                            <span className={clsx('text-primary')}>
                                {item.amount}
                            </span>
                            {item.sign}
                        </p>
                        <p>{item.description}</p>
                    </div>
                ))}
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
