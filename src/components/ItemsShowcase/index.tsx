import clsx from 'clsx';

import { Post } from '@homework-task/types';

export const ItemsShowcase = ({ items }: { items: Post[] }) => {
    return (
        <div className={clsx('flex', 'justify-center', 'items-center')}>
            <div className={clsx('grid', 'grid-cols-2', 'gap-8', 'w-8/12')}>
                {items.map(({ title, body }) => (
                    <div
                        key={title}
                        className={clsx('flex', 'flex-col', 'gap-2')}
                    >
                        <img
                            src="/media/checkmark.jpg"
                            width={25}
                            alt="Checkmark"
                        />
                        <div className={clsx('text-2xl', 'font-bold')}>
                            {title}
                        </div>
                        <p>{body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
