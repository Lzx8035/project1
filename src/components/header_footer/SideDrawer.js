import React from "react";
import { Drawer, List, ListItem } from "@mui/material";

const SiderDrawer = ({ open, onClose }) => {
  const links = [
    { where: "featured", value: "To top" },
    { where: "venuenfo", value: "Venue NFO" },
    { where: "highlights", value: "highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];

  const renderItems = links.map((link) => {
    return (
      <ListItem onClick={() => alert(link.where)} key={link.where}>
        {link.value}
      </ListItem>
    );
  });

  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav">{renderItems}</List>
    </Drawer>
  );
};

export default SiderDrawer;
