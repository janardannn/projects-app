import mongoose from 'mongoose'

const announcementSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    announcementId: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

export const announcementModel = mongoose.model("Announcement", announcementSchema);
