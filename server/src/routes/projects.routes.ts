import { createProject, getAllProjectsOfCourse, getProject } from "../controllers/projects.controller"
import { STATUS_CODES } from "../app"
// import logging and other middlwares here
// import { LogUserActivity } from "../middlewares/logging"

import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.status(STATUS_CODES.OK).json({
        "endpoint": "/project",
        "/get-project": "GET -> to get a project's details, send the project id as a params",
        "/get-all-projects-of-course": "GET -> to get all projects of a course, send the course name as a params",
        "/create-project": "POST -> to create a new project, title, description, course, tags, price, partner, oneTime, phases as a JSON object in the request body"
    })
})

router.get("/get-project", getProject)
router.get("/get-all-projects-of-course", getAllProjectsOfCourse)
router.post("/create-project", createProject)

const projectRoutes = router
export default projectRoutes