import { ButtonProps } from '@homework-task/types/buttonProps';

export interface Card {
    title: string;
    image: string;
    description: string;
    background: string;
    onClick: ButtonProps['onClick'];
    buttonText: string;
}
