import React from "react";
import "../App.css";
import { ContainHome, ThanksContain } from "../components/containers/containerProjects";
import Navbar from "../components/navbar";


const primaryColor = "#2ad680";
const secondaryColor = "#1d2125";

const styles = {
  overlayContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alingItems:'center',
    justifyContent:'center',
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: 3,
  },
  mainContainer: {
    display: "flex",
    height: "100vh",
  },
  redBox: {
    flex: "70%",
    backgroundColor: secondaryColor,
  },
  blueBox: {
    flex: "30%",
    backgroundColor: primaryColor,
  },
};

function PageHome() {
  return (
    <>
      <div style={styles.overlayContainer}>
        <Navbar/>
        <ContainHome></ContainHome>
      </div>
      <div style={styles.mainContainer}>
        <div style={styles.redBox}></div>
        <div style={styles.blueBox}></div>
      </div>
    </>
  );
}

export default PageHome;
