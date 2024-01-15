import Marquee from 'react-fast-marquee';

export const TrustBar = ({ images }: { images: string[] }) => {
    return (
        <Marquee>
            {images.map((image) => (
                <img width={100} key={image} src={image} className="mx-10" />
            ))}
        </Marquee>
    );
};
