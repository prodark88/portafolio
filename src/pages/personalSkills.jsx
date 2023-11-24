import React from "react";
import "../App.css";
import {
    SkillsContain
} from "../components/containers/containerProjects";
import NavbarSlice from "../components/footer";
import Navbar from "../components/navbar";


const primaryColor = "#2ad680";
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
    backgroundColor:secondaryColor,
  },
};

function SkillsPage() {
  return (
    <div>
      <div style={styles.overlayContainer}>
        <Navbar />
        <NavbarSlice />
        <SkillsContain></SkillsContain>
      </div>
      <div style={styles.mainContainer}>
        <div className="redBox"></div>
        <div className="blueBox"></div>
      </div>
    </div>
  );
}

export default SkillsPage;
