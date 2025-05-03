import QueryBuilder from "../../builder/QueryBuilder";
import { TProject } from "./project.interface";
import { Project } from "./project.model";

const getAllProjectsFromDb = async (query: Record<string, unknown>) => {
    const projectQuery = new QueryBuilder(Project.find(), query)
        .filter()
        .paginate()
        .sort()
        .fields()
        .search(["techTitle", "technology", "features"]);
    const data = await projectQuery.queryModel;
    const meta = await projectQuery.countTotal();
    return { data, meta };
};
const createProjectIntoDb = async (payload: TProject) => {
    const result = Project.create(payload);
    return result;
};
const getSingleProjectFromDb = async (id: string) => {
    const result = Project.findById(id);
    return result;
};
export const projectsServices = {
    getAllProjectsFromDb,
    createProjectIntoDb,
    getSingleProjectFromDb,
};
