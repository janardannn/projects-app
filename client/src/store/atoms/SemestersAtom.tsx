import { atom, selector } from "recoil";
import axios from "axios"

export type SemesterType = {
    semester: number;
};

export const semestersSelector = selector({
    key: "semestersSelector",
    get: async (course) => {
        const response = await axios.get("/semesters", {
            params: { course }
        });
        return response.data.semesters as SemesterType[];
    },
});

export const semestersAtom = atom<SemesterType[]>({
    key: "semestersAtom",
    default: semestersSelector,
});