import mongoose from "mongoose"
import { TagType } from "../types/tag.type";

// Tags Collection

const tagSchema = new mongoose.Schema<TagType>({
    tag: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
});

export const tagsModel = mongoose.model("Tags", tagSchema);