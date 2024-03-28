import { useParams } from "react-router-dom"
import BackButton from "../../components/selection/BackButton"

export default function () {
    const { course, projectId } = useParams()
    return <div>
        <div>
            {course} {projectId} Product page
        </div>
        <BackButton title={"Projects"} location={`/${course}/projects`} />
    </div>
}