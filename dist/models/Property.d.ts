import mongoose, { Document } from "mongoose";
export interface Iproperty extends Document {
    name: string;
    description: string;
    price: number;
    parking: number;
    wc: number;
    room: number;
    image: string;
}
export declare const Property: mongoose.Model<Iproperty, {}, {}, {}, mongoose.Document<unknown, {}, Iproperty> & Iproperty & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
