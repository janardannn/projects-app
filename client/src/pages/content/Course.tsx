import { useRecoilState, useRecoilValueLoadable } from "recoil"
import { useNavigate } from "react-router-dom"

import ContentCard from "../../components/selection/ContentCard"
import Loader from "../../components/Loader"
import { CourseType, coursesAtom } from "../../store/atoms/CoursesAtom"
import { userSelectionAtom } from "../../store/atoms/UserSelectionAtom"

export default function () {

    const navigate = useNavigate()

    const [userSelection, setUserSelection] = useRecoilState(userSelectionAtom)

    const handleCourseClick = (course: string) => {
        setUserSelection({ ...userSelection, course })
        navigate(`/${course}/projects`)
    }


    const getCourse = useRecoilValueLoadable(coursesAtom)

    if (getCourse.state === "loading") {
        return <Loader type="course" />
    }
    if (getCourse.state === "hasValue") {
        const courses = getCourse.contents
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
}