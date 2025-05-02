import express from "express";
import { projectControllers } from "./project.controller";
const router = express.Router();

router.post(
    "/create-project",
    // auth('customer'),
    // validateRequest(createOrderValidationSchema),
    projectControllers.createProject
);
router.get(
    "/",
    // auth('customer'),
    projectControllers.getAllProjects
);
export const projectRoutes = router;
