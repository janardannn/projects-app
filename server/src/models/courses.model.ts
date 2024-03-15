import mongoose from "mongoose";
import { SubjectType, SemesterType, CourseType } from "../types/course.type";

const subjectSchema = new mongoose.Schema<SubjectType>({
    subject: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
        required: true,
    },
    projectIds: [String],
});

const semesterSchema = new mongoose.Schema<SemesterType>({
    semester: {
        type: String,
        required: true,
    },
    subjects: [subjectSchema],
});

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
    semesters: [semesterSchema],
});

export const coursesModel = mongoose.model("Courses", courseSchema);