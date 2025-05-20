"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = exports.hasPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const hasPassword = async (password) => {
    const salt = await bcrypt_1.default.genSalt(10);
    return await bcrypt_1.default.hash(password, salt);
};
exports.hasPassword = hasPassword;
const validatePassword = async (password, hasPassword) => {
    const resultado = await bcrypt_1.default.compare(password, hasPassword);
    return resultado;
};
exports.validatePassword = validatePassword;
//# sourceMappingURL=auth.js.map