import React from "react"

interface ContentCardProps {
    content: string,
    banner?: string,
    handleClick: (content: string) => void
}

const ContentCard: React.FC<ContentCardProps> = ({ content, banner, handleClick }) => {
    const handleContentClick = () => {
        handleClick(content)
    }

    return (
        <button onClick={handleContentClick} className="hover:bg-gray-800 hover:scale-[1.025] m-6">
            <div className="h-[250px] w-[230px] border rounded-md">
                <div className="p-2 w-full h-full flex-col justify-center items-center text-2xl">
                    <div className="flex justify-center mb-1">
                        {banner && <img src={banner} alt="banner" width={200} height={200} />}
                    </div>
                    <div className="flex justify-center">
                        {content.toUpperCase()}
                    </div>
                </div>
            </div>
        </button>
    )
}

export default ContentCard