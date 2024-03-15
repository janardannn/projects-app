import { Route, Routes } from "react-router-dom"
import Course from "./pages/Course"
import Semester from "./pages/Semester"
import TopBar from "./components/topbar/TopBar";
import Subject from "./pages/Subject";
import Projects from "./pages/Projects";
import Product from "./pages/Product";
import FourOFour from "./pages/FourOFour";

export const API_URL = "http://localhost:3000";

function App() {
  return (
    <>
      <TopBar />
      <div className="flex justify-center">
        <div className="flex w-screen lg:w-[63vw] justify-center">
          <Routes>
            <Route path="/" element={<Course />} />
            <Route path="/:course" element={<Semester />} />
            <Route path="/:course/:semester" element={<Subject />} />
            <Route path="/:course/:semester/:subject/projects" element={<Projects />} />
            <Route path="/:course/:semester/:subject/projects/p/:projectId" element={<Product />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
