import Error from "../../assets/error1.jpg"
import { useNavigate } from "react-router-dom"

export default function () {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/report-error")
    }

    return <button onClick={handleClick}>
        <div className="flex items-center border rounded-md p-[4px] hover:bg-orange-700 ">
            <div className="mr-1">
                <img src={Error} width={40} className="rounded-md" />
            </div>
            <div>
                Report an Error
            </div>
        </div>
    </button>
}