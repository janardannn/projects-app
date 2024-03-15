import { atom } from "recoil";

export type userSelectionType = {
    course: string,
    semester: string,
    subject: string,
    projectId: string,
};

export const userSelectionAtom = atom<userSelectionType>({
    key: "userSelection",
    default: {
        course: "",
        semester: "",
        subject: "",
        projectId: ""
    }
});
