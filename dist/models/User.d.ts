import mongoose from "mongoose";
interface userInterface {
    name: string;
    email: string;
    password: string;
}
export declare const User: mongoose.Model<userInterface, {}, {}, {}, mongoose.Document<unknown, {}, userInterface> & userInterface & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export {};
