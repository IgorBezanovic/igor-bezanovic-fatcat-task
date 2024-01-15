import { Page } from '@homework-task/types';
import { images } from '@homework-task/utils/constants';

const sectionProps = {
    background: 'bg-primary',
};

const heroProps = {
    title: 'Page No2 - FatCat Task',
    image: 'media/home-hero.webp',
    style: 'text-white',
};

const trustBarProps = {
    images,
};

const titleProps = {
    title: 'Igor Bezanovic',
    style: ['text-white', 'ml-40', 'my-10'],
};

export const pageTwo = [
    {
        type: 'section',
        props: { ...sectionProps },
        components: [
            {
                type: 'hero',
                props: { ...heroProps },
            },
            {
                type: 'title',
                props: { ...titleProps },
            },
            {
                type: 'trustBar',
                props: { ...trustBarProps },
            },
        ],
    },
] as Page[];
