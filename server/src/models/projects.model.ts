import mongoose from "mongoose";
import { PhaseType, ProjectType } from "../types/project.type";

const phaseSchema = new mongoose.Schema<PhaseType>({
    phase: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String },
    deliverables: { type: String, required: true },
    currentlyAvailable: { type: Boolean, required: true },
});

const projectSchema = new mongoose.Schema<ProjectType>({
    projectId: {
        type: String,
        required: true,
        unique: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    course: { type: String, required: true },
    tags: [String],
    price: { type: String, required: true },
    partner: { type: String, required: true },
    oneTime: { type: Boolean, required: true },
    phases: [phaseSchema],
}, {
    timestamps: true
});

export const projectsModel = mongoose.model("Projects", projectSchema);