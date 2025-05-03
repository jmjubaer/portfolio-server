import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { skillsServices } from "./skill.services";

const createSkill = catchAsync(async (req, res) => {
    const result = await skillsServices.createSkillIntoDb(req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Skill created successfully",
        data: result,
    });
});

const getAllSkills = catchAsync(async (req, res) => {
    const result = await skillsServices.getAllSkillsFromDb();
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Get all skills successfully",
        data: result,
    });
});

export const skillControllers = {
    getAllSkills,
    createSkill
};
