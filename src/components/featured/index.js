import React from "react";
import Carrousel from "./Carrousel";
import TimeUntil from "./TimeUntil";

const Featured = () => {
  return (
    <div className="featured_container">
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Zixuan Lea Liang</div>
      </div>
      <TimeUntil />
    </div>
  );
};

export default Featured;