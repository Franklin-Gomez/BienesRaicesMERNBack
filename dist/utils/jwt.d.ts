import Types from "mongoose";
type userPayload = {
    id: Types.ObjectId;
};
export declare const generateJWT: (payload: userPayload) => string;
export {};
