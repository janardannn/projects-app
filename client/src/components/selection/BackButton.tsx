import { useNavigate } from "react-router-dom";

interface BackProps {
    title: string;
    location: string;
}

const ArrowSvg = (size: number) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg" >
            <path d="M1 7.5C1 7.66148 1.07798 7.81301 1.20938 7.90687L8.20938 12.9069C8.36179 13.0157 8.56226 13.0303 8.72879 12.9446C8.89533 12.8589 9 12.6873 9 12.5L9 10L11.5 10C11.7761 10 12 9.77614 12 9.5L12 5.5C12 5.22386 11.7761 5 11.5 5L9 5L9 2.5C9 2.31271 8.89533 2.14112 8.72879 2.05542C8.56226 1.96972 8.36179 1.98427 8.20938 2.09313L1.20938 7.09314C1.07798 7.18699 1 7.33853 1 7.5ZM8 3.4716L8 5.5C8 5.77614 8.22386 6 8.5 6L11 6L11 9L8.5 9C8.22386 9 8 9.22386 8 9.5L8 11.5284L2.36023 7.5L8 3.4716Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd">
            </path>
        </svg >
    )
}

const BackButton: React.FC<BackProps> = ({ title, location }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(location)
    }

    return (
        <button className="bg-slate-800 py-1 px-4 rounded-md hover:border" onClick={handleBackClick}>
            <div className="flex">
                <div className="h-[30px] flex items-end mr-2 pb-1">{ArrowSvg(19)}</div>
                <div className="h-[30px] flex items-end">{title}</div>
            </div>
        </button>
    )
}

export default BackButton;