export type PhaseType = {
    phase: string,
    price: string,
    description: string,
    deliverables: string,
    currentlyAvailable: boolean
}

export type ProjectType = {
    projectId: string,
    pIDHash: string,
    title: string,
    description: string,
    type: string,
    course: string,
    tags: string[],
    price: string,
    partner: string,
    oneTime: boolean,
    phases: PhaseType[]
}