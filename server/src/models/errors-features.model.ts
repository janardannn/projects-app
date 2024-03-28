import mongoose from "mongoose"

import { ErrorsAndFeaturesType } from "../types/errors-features"

const ErrorsAndFeaturesSchema = new mongoose.Schema<ErrorsAndFeaturesType>({
    issueId: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    resolved: { type: Boolean, required: true }
},
    {
        timestamps: true
    }
)

export const errorsAndFeaturesModel = mongoose.model("ErrorsAndFeatures", ErrorsAndFeaturesSchema)