import { atom } from "recoil";

export type userSelectionType = {
    course: string,
    projectId: string,
};

export const userSelectionAtom = atom<userSelectionType>({
    key: "userSelection",
    default: {
        course: "",
        projectId: ""
    }
});
