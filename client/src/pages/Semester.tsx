import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import BackButton from "../components/selection/BackButton";
import ContentCard from "../components/selection/ContentCard";
import { SemesterType, semestersAtom, semestersSelector } from "../store/atoms/SemestersAtom";

export default function () {
    const { course } = useParams();
    const navigate = useNavigate();

    // const semesters: SemesterType[] = useRecoilValue(semestersSelector(course))
    // console.log(semesters)

    return (
        <>
            <div className="w-full">
                <BackButton title="Courses" location="/" />
                <div className="lg:flex lg:flex-wrap">
                    { }
                </div>
            </div>
        </>
    )
}