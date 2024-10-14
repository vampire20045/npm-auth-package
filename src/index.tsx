import z from 'zod';
export const sing=z.object({
    username:z.string().min(5).max(20),
    password:z.string().max(20).min(5)
})
console.log("hi there ");
export type signupparams=z.infer<typeof sing>;
