import mongoose from 'mongoose'

const announcementSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

export const announcementModel = mongoose.model("Announcement", announcementSchema);
