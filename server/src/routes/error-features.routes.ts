import { createError, createFeature, getAllErrorsAndFeatures, getAllErrors, getAllFeatures, getAllErrorsAndFeaturesByUsername, getErrorOrFeatureById, markResolved } from "../controllers/error-features.controller";
import { STATUS_CODES } from "../app";

import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.status(STATUS_CODES.OK).json({
        "endpoint": "/error-feature",
        "/create-error": "POST -> to create a new error, send the username and description as a JSON object in the request body",
        "/create-feature": "POST -> to create a new feature, send the username and description as a JSON object in the request body",
        "/get-all-errors-and-features": "GET -> to get all errors and features",
        "/get-all-errors": "GET -> to get all errors",
        "/get-all-features": "GET -> to get all features",
        "/get-all-errors-and-features-by-username": "GET -> to get all errors and features by username, send the username as a query param",
        "/mark-resolved": "POST -> to mark an error or feature as resolved, send the issueId as a query param",
        "/get-error-or-feature-by-id": "GET -> to get an error or feature by its issueId, send the issueId as a query param"
    })
})

router.post("/create-error", createError)
router.post("/create-feature", createFeature)
router.get("/get-all-errors-and-features", getAllErrorsAndFeatures)
router.get("/get-all-errors", getAllErrors)
router.get("/get-all-features", getAllFeatures)
router.get("/get-all-errors-and-features-by-username", getAllErrorsAndFeaturesByUsername)
router.post("/mark-resolved", markResolved)
router.get("/get-error-or-feature-by-id", getErrorOrFeatureById)

const errorFeaturesRoutes = router
export default errorFeaturesRoutes