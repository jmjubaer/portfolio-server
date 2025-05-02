import { model, Schema } from "mongoose";
import { TSkill } from "./skill.interface";

const skillSchema = new Schema<TSkill>(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        skill: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        totalProjects: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Skill = model<TSkill>("skill", skillSchema);
