import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";

import { API_URL } from "../../App";
import { projectsAtom, projectsCountAtom } from "../../store/atoms/ProjectsAtom";
import ProjectCard from "../../components/projects/ProjectCard";
import ReactPaginate from "react-paginate";


export default function ({ course, itemsPerPage }: { course: string, itemsPerPage: number }) {

    const [projects, setProjects] = useRecoilState(projectsAtom)

    const count = useRecoilValue(projectsCountAtom)
    const pageCount = Math.ceil(count / itemsPerPage);


    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // console.log(`${course} offset ${itemOffset} limit ${itemsPerPage}`)
                const response = await axios.get(API_URL + "/project/get-paginated-projects", {
                    params: {
                        course,
                        page: page,
                        limit: itemsPerPage
                    }
                });
                if (response.status === 200) {
                    // console.log(response.data.projects)
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
    }, [page, itemsPerPage])

    const handlePageClick = (event: any) => {
        setPage(event.selected + 1)
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center md:flex md:justify-center md:items-center">
                <div className="class-this md:flex md:flex-wrap md:justify-center md:items-center">
                    {
                        projects.map((project) => {
                            return <ProjectCard key={project.projectId} projectId={project.projectId} title={project.title} type={project.type} partner={project.partner} price={project.price} tags={project.tags} />
                        })
                    }
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
                <ReactPaginate
                    className="flex"
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel="< Prev"
                    pageClassName="page-item px-2 border mx-1 rounded-md"
                    pageLinkClassName="page-link"
                    previousClassName="page-item px-2 border mx-1 rounded-md"
                    previousLinkClassName="page-link"
                    nextClassName="page-item px-2 border mx-1 rounded-md"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active bg-blue-500 bg-opacity-50"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )
}