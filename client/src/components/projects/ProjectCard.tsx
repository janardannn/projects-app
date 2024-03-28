import React from "react"
import { useParams, useNavigate } from "react-router-dom"

import Tag from "../tags/Tag"


const ratingStarSvg = (size: number) => {
    return (
        <svg width={size}
            height={size}
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                fill="currentColor">
            </path>
        </svg>
    )
}

const typeCard = (type: string) => {
    const styles = "font-semibold text-left text-sm mb-4 uppercase border p-[4px] h-[28px] rounded-sm "

    if (type === "project") {
        return styles + "w-[75px] bg-blue-800"
    }
    if (type === "research paper") {
        return styles + "w-[138px] bg-green-800"
    }
    if (type === "case study") {
        return styles + "w-[99.5px] bg-yellow-700"
    }
}

type ProjectCardProps = {
    projectId: string,
    title: string,
    type: string,
    partner: string,
    price: string,
    tags: string[]
}
const ProjectCard: React.FC<ProjectCardProps> = ({ projectId, title, type, partner, price, tags }) => {
    // title = "Open source weather website using ReactJS for frontend, NodeJS for backend and MongoDB for database Open source weather website using ReactJS for frontend, Open source weather website using ReactJS for"
    // 30 words 201 characters
    // type = "research paper"

    const { course } = useParams()
    const navigate = useNavigate()

    const handleProjectClick = () => {
        navigate(`/${course}/projects/p/${projectId}`)
    }

    return <div className="m-4">
        <div onClick={handleProjectClick}>
            <div className="w-[327px] md:w-[350px] hover:border rounded-md mb-8 p-2 hover:scale-[1.025] project-card-bg-2">
                <div className="text-left text-base mb-6 h-[135px]">{title}</div>
                <div className={typeCard(type)}>{type}</div>
                <div className="flex justify-between mb-4 pr-2 project-card-bg rounded-md p-2">
                    <div className="flex items-center">
                        <div className="mr-1">Price: </div>
                        <div className="font-semibold">₹{price}</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-1">
                            By: {partner}
                        </div>
                        <div className="flex items-center">(
                            <div className="mr-1">-</div>
                            <div>
                                {ratingStarSvg(15)}
                            </div>)
                        </div>
                    </div>
                </div>
                <div className="h-[137px] text-left">
                    <div className="text-left mb-2">Tags:</div>
                    <div className="flex flex-wrap">
                        {
                            tags.map((tag, index) => {
                                return <Tag key={index} tag={tag} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProjectCard