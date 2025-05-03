"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("./project.controller");
const router = express_1.default.Router();
router.post("/create-project", 
// auth('customer'),
// validateRequest(createOrderValidationSchema),
project_controller_1.projectControllers.createProject);
router.get("/", 
// auth('customer'),
project_controller_1.projectControllers.getAllProjects);
router.get("/:id", 
// auth('customer'),
project_controller_1.projectControllers.getSingleProject);
exports.projectRoutes = router;
