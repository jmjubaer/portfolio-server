import express from "express";
import { skillControllers } from "./skill.controller";
import {
    changeOrderStatusSchema,
    createOrderValidationSchema,
} from "./skill.validation";
const router = express.Router();

// router.post(
//     "/orders",
//     // auth('customer'),
//     // validateRequest(createOrderValidationSchema),
//     skillControllers.createOrder
// );
router.get(
    "/skills",
    // auth('customer'),
    skillControllers.getAllSkills
);
export const skillRoutes = router;
