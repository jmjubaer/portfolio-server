"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
const mongoose_1 = require("mongoose");
const skillSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        unique: true
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
}, {
    timestamps: true,
});
exports.Skill = (0, mongoose_1.model)("skill", skillSchema);
