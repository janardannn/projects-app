export type SubjectType = {
    subject: string,
    banner: string,
    projectIds: string[]
}

export type SemesterType = {
    semester: string,
    subjects: SubjectType[]
}

export type CourseType = {
    course: string,
    banner: string,
    semesters: SemesterType[]
}