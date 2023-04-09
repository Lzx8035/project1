import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import MyButton from "../utils/MyButton";

const Discount = () => {
  const [start, setStart] = useState(0);

  // 这里是为了让滑动到那个部分再动
  const handlePercentage = () => {
    if (start < 30) {
      setStart(start + 1);
    }
  };

  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart(start + 1);
      }, 30);
    }
  }, [start]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              handlePercentage();
            }
          }}
        >
          <div className="discount_percentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Pre-order and start playing as soon as it’s released.</h3>
            <p>
              An epic adventure across the land and skies of Hyrule awaits in
              The Legend of Zelda™: Tears of the Kingdom for Nintendo Switch™.
              The adventure is yours to create in a world fueled by your
            </p>

            <MyButton
              text="Purchase Tickets"
              link="https://github.com/"
              //   size="small"
              style={{ background: "salmon" }}
              icon={true}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
