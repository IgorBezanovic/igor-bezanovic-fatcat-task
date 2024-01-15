import clsx from 'clsx';

import { Title } from '@homework-task/components';
import { HeroProps } from '@homework-task/types';

export const Hero = ({ title, image, style }: HeroProps) => {
    return (
        <div
            className={clsx(
                'flex',
                'md:flex-row',
                'sm:flex-col',
                'justify-center',
                'items-center',
                'gap-4',
                'h-300',
                'py-5'
            )}
        >
            <div className={clsx('w-4/12')}>
                <Title title={title} style={style} />
            </div>
            <div className={clsx('w-4/12')}>
                <img src={image} height="100%" alt="Hero" loading="eager" />
            </div>
        </div>
    );
};
