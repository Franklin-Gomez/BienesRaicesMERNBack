"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ContactController_1 = require("../controller/ContactController");
const router = (0, express_1.Router)();
router.post('/', ContactController_1.ContacController.createContact);
exports.default = router;
//# sourceMappingURL=ContactRouter.js.map