import React from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Featured from "./components/featured";

const App = () => {
  return (
    <div className="App">
      <Header />

      <>
        <Featured />
      </>

      <div style={{ backgroundColor: "#fdc3bc", height: "800px" }}></div>
      <div style={{ backgroundColor: "#fed9d5", height: "800px" }}></div>
      <div style={{ backgroundColor: "#feefee", height: "800px" }}></div>
      <div style={{ backgroundColor: "#ffffff", height: "800px" }}></div>
      <Footer />
    </div>
  );
};

export default App;
