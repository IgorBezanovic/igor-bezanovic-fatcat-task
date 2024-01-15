import { Page } from '@homework-task/types';
import { images } from '@homework-task/utils/constants';

const sectionProps = {
    background: 'bg-primary',
};

const sectionPropsNd = {
    background: 'bg-cream',
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
    title: 'Igor Bezanovic - FatCat Task',
    style: ['text-white', 'my-10', 'text-center'],
};

const hiringWorldwideProps = {
    title: 'FatCat Coders',
    image: 'media/hiring-worldwide.svg',
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
    {
        type: 'section',
        props: { ...sectionPropsNd },
        components: [
            {
                type: 'hiringWorldwide',
                props: { ...hiringWorldwideProps },
            },
        ],
    },
] as Page[];
