import mongoose, { Document } from "mongoose";
import { string } from "zod";

export interface Iproperty  extends Document {
    name : string ,
    description : string,
    price : number,
    parking : number,
    wc : number,
    room : number
    image: string
}

const propertySchema = new mongoose.Schema({
    name  : { 
        type : String,
        required : true
    } , 

    description  : { 
        type : String,
        required : true
    } , 

    price  : { 
        type : Number,
        required : true
    } , 

    wc  : { 
        type : Number,
        required : true
    } , 

    parking  : { 
        type : Number,
        required : true
    } ,
    
    room : { 
        type : Number,
        required : true 
    },

    image : {
        type : String,
        required : true
    }

})

export const Property = mongoose.model<Iproperty>("Property" , propertySchema )