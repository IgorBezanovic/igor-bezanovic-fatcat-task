export interface Page {
    type: string;
    props: {
        background: string;
    };
    components: {
        type: string;
        props: {
            image: string;
            images: string[];
            title: string;
            style: string | string[];
        };
    }[];
}
