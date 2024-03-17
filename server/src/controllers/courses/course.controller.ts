import express from 'express'
import mongoose from 'mongoose'

import { coursesModel } from '../../models/courses.model'
import { CourseType } from '../../types/course.type'
import { STATUS_CODES } from '../../app'

const courses: mongoose.Model<CourseType> = coursesModel


export const checkIfCourseExists = async (course: string) => {
    const exists = await courses.findOne({ course })

    if (exists !== null && exists.course === course) {
        return true
    }
    else {
        return false
    }
}

export const createCourse = async (req: express.Request, res: express.Response) => {

    try {
        const { course, banner } = req.body

        if (await checkIfCourseExists(course)) {
            res.status(STATUS_CODES.BAD_REQUEST).json({ msg: "Course already exists" })
        }
        else {
            const newCourse = new courses({
                course,
                banner,
                semesters: []
            })

            await newCourse.save()

            res.status(STATUS_CODES.OK).json({ msg: "Course created successfully" })
        }
    }

    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json("Failed to create course")
    }
}

export const getAllCourses = async (req: express.Request, res: express.Response) => {
    try {
        const allCourses = await courses.find()
        res.status(STATUS_CODES.OK).json(allCourses)
    }
    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(err)
    }
}