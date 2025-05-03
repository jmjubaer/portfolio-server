import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { projectsServices } from "./project.service";

const getAllProjects = catchAsync(async (req, res) => {
    const result = await projectsServices.getAllProjectsFromDb(req?.query);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Get all projects successfully",
        data: result.data,
        meta: result.meta,
    });
});
const getSingleProject = catchAsync(async (req, res) => {
    const result = await projectsServices.getSingleProjectFromDb(
        req?.params?.id
    );
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Get projects successfully",
        data: result,
    });
});
const createProject = catchAsync(async (req, res) => {
    const result = await projectsServices.createProjectIntoDb(req?.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Create projects successfully",
        data: result,
    });
});

export const projectControllers = {
    getAllProjects,
    getSingleProject,
    createProject,
};
