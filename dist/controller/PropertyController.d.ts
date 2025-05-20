import { Request, Response } from "express";
export declare class PropertyController {
    static createProperty: (req: Request, res: Response) => Promise<void>;
    static getAllProperty: (req: Request, res: Response) => Promise<void>;
    static getOneProperty: (req: Request, res: Response) => Promise<void>;
    static updateProperty: (req: Request, res: Response) => Promise<void>;
    static deleteProperty: (req: Request, res: Response) => Promise<void>;
}
