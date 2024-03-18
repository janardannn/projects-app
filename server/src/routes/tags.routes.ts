import { createTag, getTags } from "../controllers/tags.controller"
import { STATUS_CODES } from "../app"

import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.status(STATUS_CODES.OK).json({
        "endpoint": "/tag",
        "/get-tags": "GET -> to get all tags",
        "/create-tag": "POST -> to create a new tag, send the tag and color (#hex value) as a JSON object in the request body"
    })
})

router.get("/get-tags", getTags)
router.post("/create-tag", createTag)

const tagRoutes = router
export default tagRoutes