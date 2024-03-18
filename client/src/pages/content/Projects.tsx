import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useRecoilState } from "recoil"
import axios from "axios"

import { projectsAtom } from "../../store/atoms/ProjectsAtom"
import { API_URL } from "../../App"
import ProjectCard from "../../components/projects/ProjectCard"

export default function () {
    const { course } = useParams()
    // const location = useLocation()

    const [projects, setProjects] = useRecoilState(projectsAtom)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(API_URL + "/project/get-all-projects-of-course", {
                    params: {
                        course
                    }
                });
                if (response.status === 200) {
                    setProjects(response.data.projects)
                }
                else {
                    console.error(response.data.error)
                }
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchProjects()

        return () => {
            setProjects([])
        }
    }, [course])

    return <div>
        <div className="text-center text-2xl">{course} Projects</div>
        <div className="m-6"></div>
        <div className="custom:flex custom:justify-center custom:items-center">
            <div className="custom:flex custom:flex-wrap custom:justify-start custom:items-center">
                {
                    projects.map((project, index) => {
                        return <ProjectCard key={project.projectId} projectId={project.projectId} title={project.title} type={project.type} partner={project.partner} price={project.price} tags={project.tags} />
                    })
                }
            </div>
        </div>
    </div>
}