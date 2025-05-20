import mongoose, { Document } from "mongoose";
export type Contactype = Document & {
    nombre: string;
    email: string;
    telefono: string;
    mensaje: string;
    tipo: string;
    cantidad: string;
    choose_metodo_contacto: string;
    metodo_contacto: string;
};
export declare const Contact: mongoose.Model<Contactype, {}, {}, {}, mongoose.Document<unknown, {}, Contactype> & mongoose.Document<unknown, any, any> & {
    nombre: string;
    email: string;
    telefono: string;
    mensaje: string;
    tipo: string;
    cantidad: string;
    choose_metodo_contacto: string;
    metodo_contacto: string;
} & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
