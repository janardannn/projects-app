import express from 'express'
import mongoose from 'mongoose'

import { coursesModel } from '../../models/courses.model'
import { CourseType } from '../../types/course.type'
import { STATUS_CODES } from '../../app'
import { checkIfCourseExists } from './course.controller'

const courses: mongoose.Model<CourseType> = coursesModel

export const checkIfSemeseterExists = async (course: string, semester: string) => {
    if (await checkIfCourseExists(course)) {
        const exists = await courses.findOne({ course })

        if (exists !== null && exists.course === course) {
            for (let i = 0; i < exists.semesters.length; i++) {
                if (exists.semesters[i].semester === semester) {
                    return true
                }
            }
            return false
        }

    }
    else {
        return false
    }
}

export const createSemester = async (req: express.Request, res: express.Response) => {

    try {
        const { course, semester } = req.body

        if (await checkIfSemeseterExists(course, semester)) {
            res.status(STATUS_CODES.BAD_REQUEST).json({ msg: "Semester already exists" })
        }
        else {
            const newSemester = {
                semester,
                subjects: []
            }

            const targetCourse: any = await courses.findOne({ course })
            targetCourse.semesters.push(newSemester)
            await targetCourse.save()

            res.status(STATUS_CODES.OK).json({ msg: "Semester created successfully" })
        }
    }

    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json("Failed to create semester")
    }
}

export const getAllSemesters = async (req: express.Request, res: express.Response) => {
    try {
        const { course } = req.params
        if (await checkIfCourseExists(course)) {
            const targetCourse: any = await courses.findOne({ course })
            res.status(STATUS_CODES.OK).json(targetCourse.semesters)
        }
        else {
            res.status(STATUS_CODES.NOT_FOUND).json({ msg: "Course not found" })
        }
    }
    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(err)
    }
}
