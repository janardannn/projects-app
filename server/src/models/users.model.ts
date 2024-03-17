import mongoose from "mongoose";

import { UserType } from "../types/user.type";

const userSchema = new mongoose.Schema<UserType>({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    hashedPassword: {
        type: String,
        required: true,
    },

    fullName: String,

    phoneNumber: {
        type: String,
        required: true,
    },

    UID: String,
    email: String,

    upiId: {
        type: String,
        required: true,
    },

    coursesPurchased: [String],


}, {
    timestamps: true
});

export const usersModel = mongoose.model("Users", userSchema);