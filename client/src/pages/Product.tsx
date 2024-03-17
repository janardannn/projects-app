import { useParams } from "react-router-dom"

export default function () {
    const { course, projectId } = useParams()
    return <div>
        {course} {projectId} Product page
    </div>
}