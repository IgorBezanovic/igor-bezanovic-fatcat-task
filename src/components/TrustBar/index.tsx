import Marquee from 'react-fast-marquee';

import { TrustBarProps } from '@homework-task/types';

export const TrustBar = ({ images }: TrustBarProps) => {
    return (
        <Marquee>
            {images.map((image) => (
                <img width={100} key={image} src={image} className="mx-10" />
            ))}
        </Marquee>
    );
};
