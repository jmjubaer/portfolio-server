import express from "express";
import { skillControllers } from "./skill.controller";
import {
    changeOrderStatusSchema,
    createOrderValidationSchema,
} from "./skill.validation";
const router = express.Router();

router.post(
    "/create-skill",
    // auth('customer'),
    // validateRequest(createOrderValidationSchema),
    skillControllers.createSkill
);
router.get(
    "/",
    // auth('customer'),
    skillControllers.getAllSkills
);
export const skillRoutes = router;
