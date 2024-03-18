import { createTag, getTags, modifyTag } from "../controllers/tags.controller"
import { STATUS_CODES } from "../app"

import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.status(STATUS_CODES.OK).json({
        "endpoint": "/tags",
        "/get-tags": "GET -> to get all tags",
        "/create-tag": "POST -> to create a new tag, send the tag name and color (#hex) as a JSON object in the request body",
        "/modify-tag": "PUT -> to modify an existing tag, send the tag name and color as a JSON object in the request body"
    })
})

router.get("/get-tags", getTags)
router.post("/create-tag", createTag)
router.put("/modify-tag", modifyTag)

const tagRoutes = router
export default tagRoutes