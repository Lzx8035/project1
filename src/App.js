import React from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Featured from "./components/featured";
import VenueNfo from "./components/venueNfo";
import Highlights from "./components/highlights";

const App = () => {
  return (
    <div className="App">
      <Header />

      <>
        <Featured />
      </>

      <>
        <VenueNfo />
      </>

      <>
        <Highlights />
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
