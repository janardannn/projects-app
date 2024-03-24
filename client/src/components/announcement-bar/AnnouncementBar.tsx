import { useState, useEffect } from "react";
import axios from "axios"

import { API_URL } from "../../App"

export type Announcement = {
    type: string,
    message: string
}

const closeButtonSvg = (size: number) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <g id="Edit / Close_Square">
                <path id="Vector" d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </g>
    </svg>
);


export default function AnnouncementBar() {

    const [isClosed, setIsClosed] = useState(false)
    const [announcement, setAnnouncement] = useState<Announcement>({
        type: "",
        message: ""
    })

    const [bannerColor, setBannerColor] = useState<string>()

    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                const response = await axios.get(API_URL + "/admin/announcements")
                console.log(response.data)
                setAnnouncement(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchAnnouncement()

    }, [])

    useEffect(() => {
        if (announcement.type === "ALERT") {
            setBannerColor("announcement-bar-alert")
        }
        if (announcement.type === "INFO") {
            setBannerColor("announcement-bar-info")
        }
        if (announcement.type === "PROMO") {
            setBannerColor("announcement-bar-promo")
        }
    }, [announcement])

    const handleClose = () => {
        setIsClosed(true)
    }

    if (isClosed) {
        return <></>
    }

    if (announcement && announcement.type && announcement.message !== "") {
        return <div className="flex justify-center mt-12">
            <div className={`flex justify-between items-center p-2 ${bannerColor}`}>
                <div className="w-[60vw] text-left">
                    {announcement.message}
                </div>
                <button onClick={handleClose}>
                    {closeButtonSvg(30)}
                </button>
            </div>
        </div>
    }

}