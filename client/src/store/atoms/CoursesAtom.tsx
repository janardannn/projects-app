import { atom, selector } from "recoil"
import axios from "axios"
import { API_URL } from "../../App";

export type CourseType = {
    course: string,
    banner: string
};

export const coursesSelector = selector({
    key: "coursesSelector",
    get: async () => {
        const response = await axios.get(API_URL + "/course/get-all-courses");
        return response.data.courses as CourseType[];
    }
});

export const coursesAtom = atom<CourseType[]>({
    key: "coursesAtom",
    default: coursesSelector
});