import express from "express"
import mongoose from "mongoose"

import { STATUS_CODES } from "../app"
import { tagsModel } from "../models/tags.model"
import { TagType } from "../types/tag.type"

const tags: mongoose.Model<TagType> = tagsModel

export const checkIfTagExists = async (tag: string): Promise<boolean> => {
    const exists = await tags.findOne({ tag })
    if (exists !== null && exists.tag === tag) {
        return true
    }
    else {
        return false
    }
}

export const createTag = async (req: express.Request, res: express.Response) => {
    try {
        const { tag, color } = req.body

        if (await checkIfTagExists(tag)) {
            res.status(STATUS_CODES.BAD_REQUEST).json({ msg: "Tag already exists" })
        }
        else {
            const newTag = new tags({
                tag,
                color
            })

            await newTag.save()

            res.status(STATUS_CODES.OK).json({ msg: "Tag created successfully" })
        }
    }
    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            "msg": err
        })
    }
}

export const getTags = async (req: express.Request, res: express.Response) => {
    try {
        const allTags = await tags.find()
        res.status(STATUS_CODES.OK).json(
            {
                "tags": allTags
            }
        )
    }
    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            "msg": err
        })
    }
}