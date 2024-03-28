import { getAllAnnouncements, createAnnouncement } from "../controllers/announcements.controller";
import { STATUS_CODES } from "../app";

import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.status(STATUS_CODES.OK).json({
        "endpoint": "/announcement",
        "/get-announcement": "GET -> to get the latest announcement",
        "/create-announcement": "POST -> to create a new announcement, send the type and message as a JSON object in the request body"
    })
})

router.get("/get-announcements", getAllAnnouncements)
router.post("/create-announcement", createAnnouncement)

const announcementRoutes = router
export default announcementRoutes
