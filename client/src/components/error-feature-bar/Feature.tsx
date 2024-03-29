import React, { useState } from "react";
import axios from "axios";

import { API_URL } from "../../App";
import Modal from "./Modal";

export const featureSvg = (size: number) => {
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
        >
            <g transform="translate(0,100) scale(0.1,-0.1)" fill="#fff" stroke="none">
                <path d="M475 922 c-53 -25 -81 -58 -94 -109 -14 -52 -2 -109 33 -150 35 -43
              46 -68 46 -110 0 -45 5 -54 47 -78 30 -17 33 -17 68 -1 39 19 55 48 55 103
              0 24 9 47 30 73 55 70 64 126 29 196 -38 79 -136 113 -214 76z m136 -48 c33
              -17 63 -77 54 -111 -3 -14 -22 -46 -41 -71 -18 -25 -34 -49 -34 -53 0 -5 -7
              -9 -15 -9 -23 0 -19 63 5 85 22 20 27 55 8 55 -6 0 -20 -7 -30 -17 -17 -15
              -19 -15 -38 2 -16 14 -23 16 -32 7 -9 -9 -6 -17 10 -35 26 -28 31 -97 7 -97
              -8 0 -15 6 -15 13 0 6 -16 32 -35 56 -44 56 -47 105 -9 150 41 49 100 58
              165 25z m-31 -314 c0 -17 -7 -20 -40 -20 -33 0 -40 3 -40 20 0 17 7 20 40
              20 33 0 40 -3 40 -20z"/>
                <path d="M175 517 c-38 -23 -75 -53 -82 -67 -18 -35 -18 -363 0 -378 8 -7 37
              2 99 30 l86 40 136 -51 c75 -28 144 -51 153 -51 26 0 315 168 347 202 25 27
              28 36 24 80 -7 64 -32 90 -90 93 -24 1 -54 7 -66 14 -13 7 -35 10 -48 7 -15
              -4 -33 -1 -47 9 -29 20 -55 19 -95 -5 -18 -11 -37 -20 -43 -20 -6 0 -66 32
              -133 70 -67 39 -133 70 -146 70 -14 0 -57 -19 -95 -43z m247 -78 c113 -67
              138 -85 138 -104 0 -12 -7 -28 -16 -35 -16 -14 -37 -6 -147 57 -40 22 -50
              25 -57 13 -5 -8 -7 -17 -4 -21 6 -11 212 -129 225 -129 6 0 70 34 143 75 73
              41 142 75 154 75 32 0 46 -33 24 -59 -24 -29 -293 -181 -319 -181 -13 0 -83
              23 -157 50 l-135 51 -69 -35 c-38 -19 -72 -32 -76 -29 -8 8 -8 221 1 252 6
              24 114 101 142 101 8 0 76 -36 153 -81z m241 -26 c8 -7 -165 -114 -172
              -107 -11 11 19 38 81 74 78 45 83 47 91 33z"/>
            </g>
        </svg>
    );
}
export default function () {

    const [featureSuggestion, setFeatureSuggestion] = useState<{
        username: string;
        type: string;
        description: string;
        url: string;
    }>({
        username: "diksha",
        type: "feature",
        description: "",
        url: ""
    })

    const setUrl = () => {
        setFeatureSuggestion({ ...featureSuggestion, url: window.location.href })
    }

    const onFeatureSuggestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        // console.log(e.target.value)
        setFeatureSuggestion({ ...featureSuggestion, description: e.target.value })
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
        console.log("Feature Suggestion: ", featureSuggestion)

        if (featureSuggestion.description.trim().length < 15) {
            setMessage({
                status: true,
                type: "failed",
                message: "Feature suggestion cannot be empty or less than 15 characters"
            })
            setFeatureSuggestion({ ...featureSuggestion, description: featureSuggestion.description.trim() })
            return
        }

        e.preventDefault()
        try {
            setLoader(true)

            // // 5 secs delay
            // await new Promise(resolve => setTimeout(resolve, 5000))

            await axios.post(`${API_URL}/error-feature/create-feature`, featureSuggestion)
            setLoader(false)
            setMessage({
                status: true,
                type: "success",
                message: "Feature suggestion submitted successfully"
            })
            setFeatureSuggestion({ ...featureSuggestion, description: "" })
        }
        catch (error) {
            console.log("Error: ", error)
            setLoader(false)
            setMessage({
                status: true,
                type: "failed",
                message: "Failed to submit the feature suggestion"
            })
        }
    }

    return <button>
        <div className="flex items-center border rounded-md px-2 hover:bg-green-700 ">
            <div className="mr-1">
                {/* <img src={Feature} className="w-[30px] lg:w-[40px] rounded-md" /> */}
                {featureSvg(25)}
            </div>
            <Modal type="feature" title="Suggest a feature" setUrl={setUrl} values={
                {
                    description: featureSuggestion.description,
                    url: featureSuggestion.url
                }
            } setValue={onFeatureSuggestionChange} loader={loader} error={message} clearError={clearMessage} handleSubmit={handleSubmit} />
        </div>
    </button>
}