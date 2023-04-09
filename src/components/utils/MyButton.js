import React from "react";
import { Button } from "@mui/material";

import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = (prop) => {
  return (
    <Button
      href={prop.link}
      variant="contained"
      size={prop.size || "large"}
      style={{ background: "#fdc3bc", color: "white", ...prop.style }}
    >
      {prop.icon ? (
        <img src={TicketIcon} className="iconImage" alt="iconImage" />
      ) : null}

      {prop.text}
    </Button>
  );
};

export default MyButton;
