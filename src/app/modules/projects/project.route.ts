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
router.get(
    "/:id",
    // auth('customer'),
    projectControllers.getSingleProject
);
export const projectRoutes = router;
