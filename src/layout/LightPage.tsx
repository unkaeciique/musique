import React from "react";
import { Link } from "react-router-dom";

import {
  PiChatsTeardropFill,
  PiHeadphonesFill,
  PiPlusSquareBold,
  PiNewspaperClippingBold,
  PiUserGearBold,
} from "react-icons/pi";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import images from "../../src/assets/images/images";
import "./pages.scss";

const LightPage = () => {
  return (
    <section>
      <Sidebar width="84%">
        <div>
          <img src={images.logodark} className="nav-logo" />
        </div>
        <Menu
          menuItemStyles={{
            button: {
              color: "black",
              fontSize: "1.8em",
              height: "3em",
              paddingLeft: "3em",
              //   [`&.active`]: {
              //     backgroundColor: "#13395e",
              //     color: "#000000",
              //   },
            },
          }}
        >
          <MenuItem
            component={<Link to="/homepage" />}
            icon={<PiNewspaperClippingBold />}
          >
            {"  "}
            Feed
          </MenuItem>
          <MenuItem
            component={<Link to="/homepage" />}
            icon={<PiChatsTeardropFill />}
          >
            {"  "}
            Gossips
          </MenuItem>
          <MenuItem
            component={<Link to="/homepage" />}
            icon={<PiHeadphonesFill />}
          >
            {"  "}
            Hollerspace
          </MenuItem>
          <MenuItem component={<div></div>} icon={<PiUserGearBold />}>
            {"  "}
            Find
          </MenuItem>
          <MenuItem component={<div></div>} icon={<PiPlusSquareBold />}>
            {"  "}
            Create
          </MenuItem>
        </Menu>
      </Sidebar>
    </section>
  );
};

export default LightPage;
