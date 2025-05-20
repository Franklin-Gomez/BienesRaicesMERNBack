import { Request, Response } from "express";
export declare class AuthControllers {
    static CreateUser: (req: Request, res: Response) => Promise<void>;
    static login: (req: Request, res: Response) => Promise<void>;
}
