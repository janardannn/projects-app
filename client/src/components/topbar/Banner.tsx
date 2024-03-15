import { useNavigate } from "react-router-dom"

export default function () {
    const navigate = useNavigate();

    const handleBannerClick = () => {
        navigate("/");
    }

    return (
        <button onClick={handleBannerClick}>
            <h1 className="font-bold text-3xl bg-gradient-to-r from-red-800 via-purple-800 to-blue-600 text-transparent bg-clip-text"> Projects App</h1 >
        </button >
    )
}