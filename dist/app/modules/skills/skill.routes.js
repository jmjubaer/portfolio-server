"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillRoutes = void 0;
const express_1 = __importDefault(require("express"));
const skill_controller_1 = require("./skill.controller");
const router = express_1.default.Router();
router.post("/create-skill", 
// auth('customer'),
// validateRequest(createOrderValidationSchema),
skill_controller_1.skillControllers.createSkill);
router.get("/", 
// auth('customer'),
skill_controller_1.skillControllers.getAllSkills);
exports.skillRoutes = router;
