import { useNavigate } from "react-router-dom"
import Modal from "./Modal";

export const errorSvg = (size: number) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            stroke="#f5f5f5"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.81.81 0 0 1-.57-.23l-4.67-4.673a.793.793 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57v.01Z"
                    fill="#fff"
                    fillOpacity=".16"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 16h.008M12 8v5"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    );
}


export default function () {
    // const navigate = useNavigate()

    // const handleClick = () => {
    //     <Modal title="Report An Error" body="None" url={window.location.href} />
    // }

    return <button>
        <div className="flex items-center border rounded-md px-2 hover:bg-orange-700 ">
            <div className="mr-1">
                {/* <img src={Error} className="w-[30px] lg:w-[40px] rounded-md" /> */}
                {errorSvg(25)}
            </div>
            <Modal type="error" title="Report An Error" url={window.location.href} />
        </div>
    </button>
}