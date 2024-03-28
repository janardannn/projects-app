import mongoose from "mongoose"

import { ErrorsAndFeaturesType } from "../types/errors-features"

const ErrorsAndFeaturesSchema = new mongoose.Schema<ErrorsAndFeaturesType>({
    username: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    issueId: { type: String, required: true, unique: true },
    resolved: { type: Boolean, required: true }
},
    {
        timestamps: true
    }
)

export const errorsAndFeaturesModel = mongoose.model("ErrorsAndFeatures", ErrorsAndFeaturesSchema)