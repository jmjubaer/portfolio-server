/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import AppError from "../../errors/AppError";
import QueryBuilder from "../../builder/QueryBuilder";
import { Skill } from "./skill.model";
import { TSkill } from "./skill.interface";
// add order into database
const createSkillIntoDb = async (payload: TSkill) => {
    try {
       
        const result = await Skill.create(payload);
        return result;
    } catch (err: any) {
        throw new AppError(500, err.message);
    }
};

const getAllSkillsFromDb = async (query: Record<string, unknown>) => {
     const skillQuery = new QueryBuilder(Skill.find(), query)
            .filter()
            .fields()
            .search(["title", "description", "category"]);
    const data = await skillQuery.queryModel;
    return data;
};

export const skillsServices = { getAllSkillsFromDb, createSkillIntoDb };
