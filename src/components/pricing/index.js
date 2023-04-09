import React from "react";
import MyButton from "../utils/MyButton";
import { Zoom } from "react-awesome-reveal";

const Pricing = () => {
  const PriceState = {
    prices: [100, 200, 300],
    position: ["Lorem", "Ipsum", "WWW"],
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et arcu eu lacus commodo viverra. Praesent vestibulum rhoncus lacus, vel ultrices metus maximus et.",
      "Morbi posuere urna mauris, et cursus tellus pellentesque quis. Sed eget finibus felis. Aenean quis laoreet nulla, eu tempus ex. Quisque at quam leo. Curabitur aliquet bibendum porttitor.",
      "Morbi eleifend arcu vel mauris varius porttitor. Donec ac odio neque. Fusce sollicitudin vel est vitae sagittis. Nunc vel massa at lorem placerat condimentum et ac urna. In rhoncus nisi quis dictum varius.",
    ],
    LinkTo: [
      "https://lipsum.com/",
      "https://lipsum.com/",
      "https://lipsum.com/",
    ],
    delay: [500, 0, 500],
  };

  const showBoxes = () => {
    return PriceState.prices.map((box, i) => {
      return (
        <Zoom key={i} className="pricing_item" delay={PriceState.delay[i]}>
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${PriceState.prices[i]}</span>
              <span>{PriceState.position[i]}</span>
            </div>
            <div className="pricing_description">{PriceState.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton text="Purchase" link={PriceState.LinkTo} />
            </div>
          </div>
        </Zoom>
      );
    });
  };

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>

        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;
