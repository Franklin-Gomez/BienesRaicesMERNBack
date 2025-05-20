"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PropertyController_1 = require("../controller/PropertyController");
const router = (0, express_1.Router)();
router.post('/', PropertyController_1.PropertyController.createProperty);
router.get('/', PropertyController_1.PropertyController.getAllProperty);
router.get('/:id', PropertyController_1.PropertyController.getOneProperty);
router.put('/:id', PropertyController_1.PropertyController.updateProperty);
router.delete('/:id', PropertyController_1.PropertyController.deleteProperty);
exports.default = router;
//# sourceMappingURL=PropertyRouter.js.map