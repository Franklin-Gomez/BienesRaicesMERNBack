"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const propertySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    wc: {
        type: Number,
        required: true
    },
    parking: {
        type: Number,
        required: true
    },
    room: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
exports.Property = mongoose_1.default.model("Property", propertySchema);
//# sourceMappingURL=Property.js.map