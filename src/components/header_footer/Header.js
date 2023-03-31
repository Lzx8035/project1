import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SiderDrawer from "./SideDrawer";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };

  const handleScroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 0) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: headerShow ? "salmon" : "transparent",
          //   boxShadow: "none",
          padding: "10px 0px",
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">
              Lea Soapworks
            </div>
            <div className="header_logo_title">The Handcraft Soap</div>
          </div>

          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <SiderDrawer open={drawerOpen} onClose={toggleDrawer} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
