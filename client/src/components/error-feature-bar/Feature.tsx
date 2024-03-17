import Feature from "../../assets/feature.jpg"
import { useNavigate } from "react-router-dom"

export default function () {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/request-feature")
    }

    return <button onClick={handleClick}>
        <div className="flex items-center border rounded-md p-[4px] hover:bg-green-700 ">
            <div className="mr-1">
                <img src={Feature} width={40} className="rounded-md" />
            </div>
            <div>
                Request a Feature
            </div>
        </div>
    </button>
}
