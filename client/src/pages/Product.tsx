import { useParams } from "react-router-dom"

export default function () {
    const { course, semester, subject, projectId } = useParams()
    return <div>
        {course} {semester} {subject} {projectId} Product page
    </div>
}