"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const projectModel = new mongoose_1.Schema({
    title: { type: String, required: true },
    techTitle: { type: String, required: true },
    mainImage: { type: String, required: true },
    images: { type: [String], required: true },
    features: { type: [String], required: true },
    technology: { type: [String], required: true },
    packages: { type: [String], required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    problem: { type: String },
    serial: { type: Number, required: true },
    liveLink: { type: String, required: true },
    clientCode: { type: String, required: true },
    serverCode: { type: String },
});
exports.Project = (0, mongoose_1.model)("project", projectModel);
