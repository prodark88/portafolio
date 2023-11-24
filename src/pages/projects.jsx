import React from "react";
import "../App.css";
import { AboutContain, ProjectsContain } from "../components/containers/containerProjects";
import NavbarSlice from "../components/footer";
import Navbar from "../components/navbar";

const secondaryColor = "#1d2125";

const styles = {
  overlayContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: 2,
  },
  mainContainer: {
    display: "flex",
    height: "100vh",
    backgroundColor: secondaryColor,
  },
};

function ProjectsPage() {
  return (
    <div>
      <div style={styles.overlayContainer}>
        <Navbar/>
        <NavbarSlice/>
        <ProjectsContain></ProjectsContain>
      </div>
      <div style={styles.mainContainer}>
        <div className="redBox"></div>
        <div className="blueBox"></div>
      </div>
    </div>
  );
}

export default ProjectsPage;
