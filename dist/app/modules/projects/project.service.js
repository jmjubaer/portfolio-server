"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectsServices = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const project_model_1 = require("./project.model");
const getAllProjectsFromDb = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const projectQuery = new QueryBuilder_1.default(project_model_1.Project.find(), query)
        .filter()
        .paginate()
        .sort()
        .fields()
        .search(["techTitle", "technology", "features"]);
    const data = yield projectQuery.queryModel;
    const meta = yield projectQuery.countTotal();
    return { data, meta };
});
const createProjectIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = project_model_1.Project.create(payload);
    return result;
});
const getSingleProjectFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = project_model_1.Project.findById(id);
    return result;
});
exports.projectsServices = {
    getAllProjectsFromDb,
    createProjectIntoDb,
    getSingleProjectFromDb,
};
