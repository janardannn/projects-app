import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import axios from "axios"

import { projectsCountAtom } from "../../store/atoms/ProjectsAtom"
import { API_URL } from "../../App"
// import ProjectCard from "../../components/projects/ProjectCard"
import BackButton from "../../components/selection/BackButton"
import PaginatedProjects from "./PaginatedProjects"


export default function () {
    const { course } = useParams() as { course: string }
    // const location = useLocation()

    const [projectsCount, setProjectsCount] = useRecoilState(projectsCountAtom)

    // const [projects, setProjects] = useRecoilState(projectsAtom)


    useEffect(() => {
        const fetchProjectsCount = async () => {
            try {
                const response = await axios.get(API_URL + "/project/get-projects-count", {
                    params: {
                        course
                    }
                });
                if (response.status === 200) {
                    // console.log(response.data.count)
                    setProjectsCount(response.data.count)
                }
                else {
                    console.error(response.data.error)
                }
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchProjectsCount()

        return () => {
            setProjectsCount(0)
        }
    }, [])

    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         try {
    //             const response = await axios.get(API_URL + "/project/get-all-projects-of-course", {
    //                 params: {
    //                     course
    //                 }
    //             });
    //             if (response.status === 200) {
    //                 setProjects(response.data.projects)
    //             }
    //             else {
    //                 console.error(response.data.error)
    //             }
    //         }
    //         catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     fetchProjects()

    //     return () => {
    //         setProjects([])
    //     }
    // }, [course])

    return <div>
        {/* <AnnouncementBar /> */}
        <div className="text-center text-2xl">{course} Projects</div>
        <div className="m-6"></div>

        <div className="max-w-[80vw]">
            <BackButton title={"Course"} location={"/"} />

            <div className="flex w-full justify-center items-center my-4">
                <div>{projectsCount} Total Available</div>
            </div>

            <PaginatedProjects course={course} itemsPerPage={9} />
        </div>
        {/* <div className="custom:flex custom:justify-center custom:items-center">
            <div className="custom:flex custom:flex-wrap custom:justify-start custom:items-center">
                {
                    projects.map((project) => {
                        return <ProjectCard key={project.projectId} projectId={project.projectId} title={project.title} type={project.type} partner={project.partner} price={project.price} tags={project.tags} />
                    })
                }
            </div>
        </div> */}
    </div>
}