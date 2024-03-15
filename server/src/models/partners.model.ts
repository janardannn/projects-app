import mongoose from "mongoose";

import { PartnerType } from "../types/partner.type";

const partnerSchema = new mongoose.Schema<PartnerType>({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    hashedPassword: {
        type: String,
        required: true,
    },

    fullName: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },

    UID: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: false,
    },

    upiId: {
        type: String,
        required: true,
        unique: true,
    },

    rating: {
        type: Number,
    },

    coursesSelling: [String],
});

export const partnersModel = mongoose.model("Partners", partnerSchema);