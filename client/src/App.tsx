import { Route, Routes } from "react-router-dom"
import Course from "./pages/Course"
import TopBar from "./components/topbar/TopBar";
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
            <Route path="/:course/projects" element={<Projects />} />
            <Route path="/:course/projects/p/:projectId" element={<Product />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
