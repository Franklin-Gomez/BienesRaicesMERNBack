import { z } from 'zod';
export declare const propertySchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    price: z.ZodEffects<z.ZodString, number, string>;
    wc: z.ZodEffects<z.ZodString, number, string>;
    parking: z.ZodEffects<z.ZodString, number, string>;
    room: z.ZodEffects<z.ZodString, number, string>;
    image: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name?: string;
    image?: string;
    description?: string;
    price?: number;
    wc?: number;
    parking?: number;
    room?: number;
}, {
    name?: string;
    image?: string;
    description?: string;
    price?: string;
    wc?: string;
    parking?: string;
    room?: string;
}>;
