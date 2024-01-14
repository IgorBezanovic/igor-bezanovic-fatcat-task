import { z } from 'zod';

export const schema = z.object({
    title: z
        .string()
        .max(20, { message: 'Must be 20 or fewer characters long' })
        .refine((value) => value.trim() !== '', {
            message: 'Title is required',
        }),
    body: z
        .string()
        .max(500, { message: 'Must be 500 or fewer characters long' })
        .refine((value) => value.trim() !== '', {
            message: 'Body is required',
        }),
});
