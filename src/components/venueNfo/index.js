import React from "react";
import { Zoom } from "react-awesome-reveal";
import calendar from "../../resources/images/icons/calendar.png";
import location from "../../resources/images/icons/location.png";

const VenueNfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom className="vn_item">
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${calendar})` }}
                  ></div>
                  <div className="vn_title">Release Date:</div>
                  <div className="vn_desc">May 12 2023 @00:00:00AM</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom className="vn_item" delay={500}>
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${location})` }}
                  ></div>
                  <div className="vn_title">Release location:</div>
                  <div className="vn_desc">Nintendo Switch eshop</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueNfo;
