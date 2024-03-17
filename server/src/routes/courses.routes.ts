import { getCourse, getAllCourses, createCourse } from "../controllers/course.controller";
import { STATUS_CODES } from "../app";
// import logging and other middlwares here 
import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.status(STATUS_CODES.OK).json({
        "endpoint": "/course",
        "/get-course": "GET -> to get a course's details, send the course name as a params",
        "/get-all-courses": "GET -> to get all courses",
        "/create-course": "POST -> to create a new course, send the course name and banner as a JSON object in the request body"
    })
})

router.get("/get-course", getCourse)
router.get("/get-all-courses", getAllCourses)
router.post("/create-course", createCourse)

const courseRoutes = router
export default courseRoutes