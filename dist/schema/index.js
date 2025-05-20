"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertySchema = void 0;
const zod_1 = require("zod");
exports.propertySchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.string().transform((val) => parseInt(val, 10)),
    wc: zod_1.z.string().transform((val) => parseInt(val, 10)),
    parking: zod_1.z.string().transform((val) => parseInt(val, 10)),
    room: zod_1.z.string().transform((val) => parseInt(val, 10)),
    image: zod_1.z.string()
});
//# sourceMappingURL=index.js.map