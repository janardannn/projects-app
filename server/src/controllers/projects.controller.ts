import express from "express"
import mongoose from "mongoose"
// import md5 from "md5"
const sha256 = require("js-sha256")

import { projectsModel } from "../models/projects.model"
import { checkIfCourseExists } from "./course.controller"
import { ProjectType } from "../types/project.type"
import { STATUS_CODES } from "../app"

const projects = mongoose.Model<ProjectType> = projectsModel

const checkIfProjectExists = async (projectId: string): Promise<boolean> => {
    const exists = await projects.findOne({ projectId })

    if (exists !== null && exists.projectId === projectId) {
        return true
    }
    else {
        return false
    }
}

export const createProject = async (req: express.Request, res: express.Response) => {

    try {
        const { title, description, type, course, tags, price, partner, oneTime, phases } = req.body as ProjectType
        const pIDHash = sha256(title + partner)
        const projectId = pIDHash.slice(0, 10)

        if (await checkIfProjectExists(projectId)) {
            res.status(STATUS_CODES.BAD_REQUEST).json({ msg: "Project already exists" })
        }
        else {
            const newProject = new projects({
                projectId,
                pIDHash,
                title,
                description,
                type,
                course,
                tags,
                price,
                partner,
                oneTime,
                phases
            })

            await newProject.save()

            res.status(STATUS_CODES.OK).json({ msg: "Project created successfully" })
        }
    }

    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            "msg": err
        })
    }
}

export const getAllProjectsOfCourse = async (req: express.Request, res: express.Response) => {
    try {
        const { course } = req.query as { course: string }

        if (await checkIfCourseExists(course)) {
            const allProjects = await projects.find({ course })
            res.status(STATUS_CODES.OK).json(
                {
                    "projects": allProjects
                }
            )
        }
        else {
            res.status(STATUS_CODES.NOT_FOUND).json({ msg: "Course not found" })
        }
    }
    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            "msg": err
        })
    }
}

export const getProject = async (req: express.Request, res: express.Response) => {
    try {
        const { projectId } = req.query as { projectId: string }
        if (await checkIfProjectExists(projectId)) {
            const projectDetails = await projects.findOne({ projectId })
            res.status(STATUS_CODES.OK).json(
                {
                    "project": projectDetails
                }
            )
        }
        else {
            res.status(STATUS_CODES.NOT_FOUND).json({ msg: "Project not found" })
        }
    }
    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            "msg": err
        })
    }
}