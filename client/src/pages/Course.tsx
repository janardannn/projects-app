import { useRecoilState, useRecoilValue } from "recoil"

import ContentCard from "../components/selection/ContentCard"
import { CourseType, coursesAtom } from "../store/atoms/CoursesAtom"
import { userSelectionAtom } from "../store/atoms/UserSelectionAtom"
import { useNavigate } from "react-router-dom"


export default function () {

    const navigate = useNavigate()
    const courses: CourseType[] = useRecoilValue(coursesAtom)

    const [userSelection, setUserSelection] = useRecoilState(userSelectionAtom)

    const handleCourseClick = (course: string) => {
        setUserSelection({ ...userSelection, course })
        navigate(`/${course}`)
    }

    return (
        <>
            {/* <ContentCard content="CSE/IT" banner="https://thumbs.dreamstime.com/b/line-web-concept-computer-science-vector-banner-education-open-path-76284593.jpg" /> */}
            <div className="flex justify-center flex-wrap">
                {courses.map((course: CourseType, index: number) => (
                    <ContentCard content={course.course} banner={course.banner} key={index} handleClick={handleCourseClick} />
                ))}
            </div>
        </>
    )
}