import express from 'express'
import mongoose from 'mongoose'

import { coursesModel } from '../../models/courses.model'
import { CourseType } from '../../types/course.type'
import { STATUS_CODES } from '../../app'
import { checkIfSemeseterExists } from './semester.controller'

const courses: mongoose.Model<CourseType> = coursesModel

const checkIfSubjectExists = async (course: string, semester: string, subject: string) => {
    if (await checkIfSemeseterExists(course, semester)) {
        const exists = await courses.findOne({ course })

        if (exists !== null && exists.course === course) {
            for (let i = 0; i < exists.semesters.length; i++) {
                if (exists.semesters[i].semester === semester) {
                    for (let j = 0; j < exists.semesters[i].subjects.length; j++) {
                        if (exists.semesters[i].subjects[j].subject === subject) {
                            return true
                        }
                    }
                    return false
                }
            }
            return false
        }
    }
    else {
        return false
    }
}

export const createSubject = async (req: express.Request, res: express.Response) => {
    try {
        const { course, semester, subject } = req.body

        if (await checkIfSubjectExists(course, semester, subject)) {
            res.status(STATUS_CODES.BAD_REQUEST).json({ msg: "Subject already exists" })
        }
        else {
            const newSubject = {
                subject,
                topics: []
            }

            const targetCourse: any = await courses.findOne({ course })
            for (let i = 0; i < targetCourse.semesters.length; i++) {
                if (targetCourse.semesters[i].semester === semester) {
                    targetCourse.semesters[i].subjects.push(newSubject)
                    await targetCourse.save()
                    res.status(STATUS_CODES.OK).json({ msg: "Subject created successfully" })
                }
            }
        }
    }

    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json("Failed to create subject")
    }
}

export const getAllSubjects = async (req: express.Request, res: express.Response) => {
    try {
        const { course, semester } = req.params
        if (await checkIfSemeseterExists(course, semester)) {
            const targetCourse: any = await courses.findOne({ course })
            for (let i = 0; i < targetCourse.semesters.length; i++) {
                if (targetCourse.semesters[i].semester === semester) {
                    res.status(STATUS_CODES.OK).json(targetCourse.semesters[i].subjects)
                }
            }
        }
        else {
            res.status(STATUS_CODES.BAD_REQUEST).json({ msg: "Semester does not exist" })
        }
    }

    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json("Failed to get subjects")
    }
}