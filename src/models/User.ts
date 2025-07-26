import mongoose, { Schema } from "mongoose";

interface userInterface {
    name : string,
    email : string,
    password : string
}

const  userSchema   : Schema = new mongoose.Schema({
    
    name : { 
        type : String ,
        required : true
    },
    
    email : { 
        type : String,
        required : true,
        unique : true
    },

    password : { 
        type : String,
        required : true
    }

})  

export const User = mongoose.model<userInterface>('User' , userSchema)
