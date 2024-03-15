import { useParams } from "react-router-dom"

export default function () {
    const { subject } = useParams()
    return <div>
        {subject} Subjects Page
    </div>
}