import mongoose from "mongoose";
import { CourseType } from "../types/course.type";


const courseSchema = new mongoose.Schema<CourseType>({
    course: {
        type: String,
        required: true,
        unique: true,
    },
    banner: {
        type: String,
        required: true,
    },
    projects: [String]
}, {
    timestamps: true
});

export const coursesModel = mongoose.model("Courses", courseSchema);