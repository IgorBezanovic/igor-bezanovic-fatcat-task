import { Page } from '@homework-task/types';
import { images } from '@homework-task/utils/constants';

const sectionProps = {
    background: 'bg-cream',
};

const heroProps = {
    title: 'Page No1 - FatCat Task',
    image: 'media/hero.png',
};

const trustBarProps = {
    images,
};

export const pageOne = [
    {
        type: 'section',
        props: { ...sectionProps },
        components: [
            {
                type: 'hero',
                props: { ...heroProps },
            },
            {
                type: 'trustBar',
                props: { ...trustBarProps },
            },
        ],
    },
] as Page[];
