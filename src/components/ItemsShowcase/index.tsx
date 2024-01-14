import { Post } from '@homework-task/types';

export const ItemsShowcase = ({ items }: { items: Post[] }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-8 w-8/12">
                {items.map(({ title, body }) => (
                    <div key={title} className="flex flex-col gap-2">
                        <img
                            src="/media/checkmark.jpg"
                            width={25}
                            alt="Checkmark"
                        />
                        <div className="text-2xl font-bold">{title}</div>
                        <p className="">{body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
