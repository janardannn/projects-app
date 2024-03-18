import React from "react"

type TagProps = {
    tag: string
}

const Tag: React.FC<TagProps> = ({ tag }) => {
    return <div>
        <div className="text-sm p-1 border m-[6px] rounded-md">
            {tag}
        </div>
    </div >
}

export default Tag