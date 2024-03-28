import express from "express"
const sha256 = require("js-sha256")

import { STATUS_CODES } from "../app"
import { announcementModel } from "../models/announcement.model"

export const getAllAnnouncements = async (req: express.Request, res: express.Response) => {
    const announcements = await announcementModel.find()
    const last = announcements.length - 1
    res.status(200).json({
        "type": announcements[last].type,
        "message": announcements[last].message,
        "announcementId": announcements[last].announcementId
    })
}

export const createAnnouncement = async (req: express.Request, res: express.Response) => {
    try {
        const { type, message } = req.body

        const announcementId = sha256(message)

        const newAnnouncement = new announcementModel({ type, message, announcementId })
        await newAnnouncement.save()
        res.status(STATUS_CODES.OK).json({
            msg: "Announcement created successfully"
        })
    }
    catch (err) {
        res.status(STATUS_CODES.BAD_REQUEST).json({
            msg: err
        })
    }
}