
import "./App.css";
import SkillsPage from "./pages/personalSkills";
import PageHome from "./pages/home"
import ThanksPage from "./pages/thanks";
import ProjectsPage from "./pages/projects";
import AboutPage from "./pages/about";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<PageHome />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="thanks" element={<ThanksPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
