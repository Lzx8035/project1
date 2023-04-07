import React, { useState, useEffect, useCallback } from "react";
import { Slide } from "react-awesome-reveal";

const TimeUntil = () => {
  const [time, setTime] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  const renderItem = (time, value) => {
    return (
      <div className="countdown_item">
        <div className="countdown_time">{time}</div>
        <div className="countdown_tag">{value}</div>
      </div>
    );
  };

  const getTimeUntil = useCallback((deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("Date passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / 1000 / 60 / 60) % 60);
      const days = Math.floor((time / 1000 / 60 / 60 / 24) % 60);

      setTime({ seconds, minutes, hours, days });
    }
  }, []);

  useEffect(() => {
    setInterval(() => getTimeUntil("May, 12, 2023, 00:00:00"), 1000);
  }, [getTimeUntil]);

  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event start in:</div>
        <div className="countdown_bottom">
          {renderItem(time.days, "days")}
          {renderItem(time.hours, "hrs")}
          {renderItem(time.minutes, "mins")}
          {renderItem(time.seconds, "secs")}
        </div>
      </div>
    </Slide>
  );
};

export default TimeUntil;
