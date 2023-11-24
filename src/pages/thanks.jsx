import React from "react";
import "../App.css";
import { ContainHome, ThanksContain } from "../components/containers/containerProjects";
import NavbarSlice from "../components/footer";
import Navbar from "../components/navbar";

const primaryColor = "#2ad680";
const secondaryColor = "#1d2125";

const styles = {
  overlayContainer: {
    position: "absolute",
    display: "flex",
    alignItems: "",
    justifyContent:'center',
    flexDirection: "column",
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: 2,
  },
  mainContainer: {
    display: "flex",
    height: "100vh",
  },
  redBox: {
    flex: "30%",
    backgroundColor: primaryColor,
  },
  blueBox: {
    flex: "70%",
    backgroundColor: secondaryColor,
  },
};

function ThanksPage() {
  return (
    <div>
      <div style={styles.overlayContainer}>
        <Navbar />
        <NavbarSlice />
        <ThanksContain></ThanksContain>
      </div>
      <div style={styles.mainContainer}>
        <div style={styles.redBox}></div>
        <div style={styles.blueBox}></div>
      </div>
    </div>
  );
}

export default ThanksPage;
