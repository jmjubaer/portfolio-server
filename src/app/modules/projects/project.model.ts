import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";

const projectModel = new Schema<TProject>({
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
export const Project = model<TProject>("project", projectModel);
