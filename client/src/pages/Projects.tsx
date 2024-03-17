import { useParams } from "react-router-dom"

export default function () {
    const { course } = useParams()

    return <div>
        {course} Projects Page
    </div>
}