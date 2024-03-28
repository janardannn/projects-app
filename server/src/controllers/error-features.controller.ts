import express from "express"
import mongoose from "mongoose"
const sha256 = require('js-sha256')

import { errorsAndFeaturesModel } from "../models/errors-features.model"
import { ErrorsAndFeaturesType } from "../types/errors-features"
import { STATUS_CODES } from "../app"

const errorsAndFeatures: mongoose.Model<ErrorsAndFeaturesType> = errorsAndFeaturesModel

export const checkIfExists = async (issueId: string) => {
    const errorOrFeature = await errorsAndFeatures.findOne({ issueId })
    if (errorOrFeature) {
        return true
    }
    else {
        return false
    }
}

export const createError = async (req: express.Request, res: express.Response) => {
    try {
        const { username, type, description, url } = req.body as ErrorsAndFeaturesType

        const issueId = sha256(username + type + description + url)

        const newError = new errorsAndFeatures({
            username,
            type: "error",
            description,
            url,
            issueId,
            resolved: false
        })

        await newError.save()
        res.status(STATUS_CODES.OK).json({
            "msg": "Error created successfully"
        })

    }
    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            "msg": err
        })
    }
}

export const createFeature = async (req: express.Request, res: express.Response) => {
    try {
        const { username, type, description, url } = req.body as ErrorsAndFeaturesType

        const issueId = sha256(username + type + description + url)

        const newFeature = new errorsAndFeatures({
            username,
            type: "feature",
            description,
            url,
            issueId,
            resolved: false
        })

        await newFeature.save()
        res.status(STATUS_CODES.OK).json({
            "msg": "Feature created successfully"
        })
    }
    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            "msg": err
        })
    }
}

export const getAllErrorsAndFeatures = async (req: express.Request, res: express.Response) => {
    try {
        const allErrorsAndFeatures = await errorsAndFeatures.find()
        res.status(STATUS_CODES.OK).json(
            {
                "errorsAndFeatures": allErrorsAndFeatures
            }
        )
    }
    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            "msg": err
        })
    }
}

export const getAllErrors = async (req: express.Request, res: express.Response) => {
    try {
        const allErrors = await errorsAndFeatures.find({ type: "error" })
        res.status(STATUS_CODES.OK).json(
            {
                "errors": allErrors
            }
        )
    }
    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            "msg": err
        })
    }
}

export const getAllFeatures = async (req: express.Request, res: express.Response) => {
    try {
        const allFeatures = await errorsAndFeatures.find({ type: "feature" })
        res.status(STATUS_CODES.OK).json(
            {
                "features": allFeatures
            }
        )
    }
    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            "msg": err
        })
    }
}

export const getAllErrorsAndFeaturesByUsername = async (req: express.Request, res: express.Response) => {
    try {
        const { username } = req.query as { username: string }
        const allErrorsAndFeatures = await errorsAndFeatures.find({ username })
        res.status(STATUS_CODES.OK).json(
            {
                "errorsAndFeatures": allErrorsAndFeatures
            }
        )
    }
    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            "msg": err
        })
    }
}

export const getErrorOrFeatureById = async (req: express.Request, res: express.Response) => {
    try {
        const { issueId } = req.query as { issueId: string }
        const errorOrFeature = await errorsAndFeatures.findOne({ issueId })
        res.status(STATUS_CODES.OK).json(
            {
                "errorOrFeature": errorOrFeature
            }
        )
    }
    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            "msg": err
        })
    }
}

export const markResolved = async (req: express.Request, res: express.Response) => {
    try {
        const { issueId } = req.body as { issueId: string }
        await errorsAndFeatures.updateOne({ issueId }, { resolved: true })
        res.status(STATUS_CODES.OK).json({
            "msg": "Marked as resolved"
        })
    }
    catch (err) {
        res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json({
            "msg": err
        })
    }
}

