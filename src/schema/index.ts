import { z } from 'zod';

export const propertySchema = z.object({
  name : z.string(),
  description : z.string(),
  price: z.string().transform((val) => parseInt(val, 10)),
  wc: z.string().transform((val) => parseInt(val, 10)),
  parking: z.string().transform((val) => parseInt(val, 10)),
  room: z.string().transform((val) => parseInt(val, 10)),
});
