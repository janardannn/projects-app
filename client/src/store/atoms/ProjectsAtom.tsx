import { atom, selector } from "recoil"
import axios from "axios"

import { API_URL } from "../../App"

type PhaseType = {
    phase: string,
    price: string,
    description: string,
    deliverables: string,
    currentlyAvailable: boolean
}

export type ProjectType = {
    projectId: string,
    title: string,
    description: string,
    type: string,
    course: string,
    tags: string[],
    price: string,
    partner: string,
    oneTime: boolean,
    phases?: PhaseType[]
}

export const projectsSelector = selector({
    key: "projectsSelector",
    get: async () => {
        const response = await axios.get(API_URL + "/project/get-all-projects-of-course", {
            params: {
                course: "CSE"
            }
        });
        return response.data.projects as ProjectType[];
    }
});

export const projectsAtom = atom<ProjectType[]>({
    key: "projectsAtom",
    default: projectsSelector
});