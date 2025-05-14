import mongoose, { Document, Schema } from "mongoose";

export type Contactype = Document & { 
    nombre : string,
    email : string,
    telefono : string,
    mensaje : string ,
    tipo : string,
    cantidad : string,
    choose_metodo_contacto : string,
    metodo_contacto : string
}


const Contactschema : Schema = new mongoose.Schema({
    nombre : {
        type : String,
        require : true
    },

    email : { 
        type : String,
        require : true
    },

    telefono : { 
        type : String,
        require : true
    },

    mensaje : {
        type : String,
        require : true 
    },

    tipo : { 
        type : String,
        require : true
    },

    cantidad : {
        type : String,
        require : true
    },

    choose_metodo_contacto : {
        type : String,
        required : true
    },

    metodo_contacto : {
        type : String,
        required : true
    }

})

// añadiendo el mondelo a mongoose
export const Contact = mongoose.model<Contactype>('Contact' , Contactschema )