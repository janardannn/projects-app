import React from "react"
import { useRecoilValueLoadable } from "recoil"

import { tagsAtom } from "../../store/atoms/TagsAtom"

type TagProps = {
    tag: string
}

const Tag: React.FC<TagProps> = ({ tag }) => {
    tag = tag.toLowerCase()
    const getTags = useRecoilValueLoadable(tagsAtom)
    const tags = getTags.state === "hasValue" ? getTags.contents : []

    const tagColor = tags.find((tagType) => tagType.tag.toLowerCase() === tag)?.color

    const style = {
        backgroundColor: tagColor
    }

    return <div>
        <div className="uppercase text-[0.69rem] p-1 border m-[6px] rounded-md" style={style}>
            {tag}
        </div>
    </div >
}

export default Tag