export type PhaseType = {
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
    course: string,
    tags: string[],
    price: string,
    partner: string,
    oneTime: boolean,
    phases: PhaseType[]
}