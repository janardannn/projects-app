import { atom, selector } from "recoil"
import axios from "axios"

import { API_URL } from "../../App"

export type TagType = {
    tag: string,
    color: string
}

export const tagsSelector = selector({
    key: "tagsSelector",
    get: async () => {
        const response = await axios.get(API_URL + "/tag/get-tags");
        return response.data.tags as TagType[];
    }
})

export const tagsAtom = atom<TagType[]>({
    key: "tagsAtom",
    default: tagsSelector
})