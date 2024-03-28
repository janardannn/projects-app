import { useState } from "react";
import axios from "axios";

import { API_URL } from "../../App";
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

    const [errorReport, setErrorReport] = useState<{
        username: string;
        type: string;
        description: string;
        url: string;
    }>({
        username: "diksha",
        type: "error",
        description: "",
        url: ""
    })

    const setUrl = () => {
        setErrorReport({ ...errorReport, url: window.location.href })
    }

    const onErrorChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value)
        setErrorReport({ ...errorReport, description: e.target.value })
    }

    const [loader, setLoader] = useState(false)
    const [message, setMessage] = useState<{
        status: boolean,
        type: "failed" | "success",
        message: string
    }>({
        status: false,
        type: "success",
        message: ""
    })

    const clearMessage = () => {
        setMessage({
            status: false,
            type: "success",
            message: ""
        })
    }

    const handleSubmit = async (e: React.MouseEvent) => {
        console.log("Error Report: ", errorReport)

        if (errorReport.description.trim().length < 15) {
            setMessage({
                status: true,
                type: "failed",
                message: "Error report cannot be empty or less than 15 characters"
            })
            setErrorReport({ ...errorReport, description: errorReport.description.trim() })
            return
        }

        e.preventDefault()
        try {
            setLoader(true)

            // // 5 secs delay
            // await new Promise(resolve => setTimeout(resolve, 5000))

            await axios.post(`${API_URL}/error-feature/create-error`, errorReport)
            setLoader(false)
            setMessage({
                status: true,
                type: "success",
                message: "Error reported successfully"
            })
            setErrorReport({ ...errorReport, description: "" })
        }
        catch (err) {
            console.log("Error: ", err)
            setLoader(false)
            setMessage({
                status: true,
                type: "failed",
                message: "Error reporting failed"
            })
        }
    }

    return <button>
        <div className="flex items-center border rounded-md px-2 hover:bg-orange-700 ">
            <div className="mr-1">
                {/* <img src={Error} className="w-[30px] lg:w-[40px] rounded-md" /> */}
                {errorSvg(25)}
            </div>
            <Modal type="error" title="Report An Error" setUrl={setUrl} values={
                {
                    description: errorReport.description,
                    url: errorReport.url
                }
            } setValue={onErrorChange} loader={loader} error={message} clearError={clearMessage} handleSubmit={handleSubmit} />
        </div>
    </button>
}