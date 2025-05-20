"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        // conexion a la db 
        const conection = await mongoose_1.default.connect(process.env.DATABASE_URL);
        const url = `${conection.connection.host}:${conection.connection.port}`;
        console.log(`MongoDB Conectado en : ${url}`);
    }
    catch (error) {
        //console.log( error.message )
        console.log('error al conectar a la DB ');
        process.exit(1); // code 1 - error conection
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=index.js.map