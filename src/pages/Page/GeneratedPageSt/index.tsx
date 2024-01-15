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

const aboutHeroProps = {
    title: 'FatCat is all about',
    text: 'growing together.',
    image: 'media/about-hero.webp',
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
    {
        type: 'section',
        props: { ...sectionProps },
        components: [
            {
                type: 'aboutHero',
                props: { ...aboutHeroProps },
            },
        ],
    },
] as Page[];
