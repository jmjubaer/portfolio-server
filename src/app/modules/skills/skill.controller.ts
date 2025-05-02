import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { skillsServices } from "./skill.services";

// create Order controller
// const createOrder = catchAsync(async (req, res) => {
//   const order = req.body;

//   const result = await orderService.createOrderIntoDb(order, req.ip!);
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: 'Order created successfully',
//     data: result,
//   });
// });

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
};
