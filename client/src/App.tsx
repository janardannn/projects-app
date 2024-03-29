import { Route, Routes } from "react-router-dom"
import Course from "./pages/content/Course"
import TopBar from "./components/topbar/TopBar";
import ErrorFeatureBar from "./components/error-feature-bar/ErrorFeatureBar";
import Projects from "./pages/content/Projects";
import Product from "./pages/content/Product";
import FourOFour from "./pages/FourOFour";
import BottomBar from "./components/bottombar/BottomBar";
import AnnouncementBar from "./components/announcement-bar/AnnouncementBar";

export const API_URL = "http://localhost:3000";

function App() {
  return (
    <>
      <div className="min-h-[90vh]">
        <TopBar />

        {/* spacer for mobile devices */}
        <div className="mb-8 sm:mb-0"></div>
        <ErrorFeatureBar />

        <AnnouncementBar />

        <div className="mb-12"></div>
        <div className="flex justify-center">
          <div className="flex w-screen custom:w-[1165px] justify-center">
            <Routes>
              <Route path="/" element={<Course />} />
              <Route path="/:course/projects" element={<Projects />} />
              <Route path="/:course/projects/p/:projectId" element={<Product />} />
              <Route path="*" element={<FourOFour />} />
            </Routes>
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  )
}

export default App
