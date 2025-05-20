"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthControllers_1 = require("../controller/AuthControllers");
const router = (0, express_1.Router)();
router.post('/create-user', AuthControllers_1.AuthControllers.CreateUser);
router.post('/login', AuthControllers_1.AuthControllers.login);
exports.default = router;
//# sourceMappingURL=AuthRoutes.js.map