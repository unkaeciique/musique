import React from "react";
import { Link } from "react-router-dom";

import {
  PiChatsTeardropFill,
  PiHeadphonesFill,
  PiNewspaperClippingBold,
} from "react-icons/pi";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import images from "../../assets/images/images";
import "../LightPage/LightPage.scss";

const LightPage = () => {
  return (
    <section className="bg-black dark-nav">
      <Sidebar width="100%" className="bg-black">
        <div className="bg-black">
          <img src={images.logolight} className="p-12" />
        </div>
        <Menu
          menuItemStyles={{
            button: {
              color: "white",
              fontSize: "1.8em",
              height: "3em",
              paddingLeft: "3em",
              backgroundColor: "black",
              //   [`&.active`]: {
              //     backgroundColor: "#13395e",
              //     color: "#000000",
              //   },
            },
          }}
        >
          <MenuItem
            component={<Link to="/homepage" />}
            icon={<PiNewspaperClippingBold fill="white" />}
          >
            {"  "}
            Feed
          </MenuItem>
          <MenuItem
            component={<Link to="/homepage" />}
            icon={<PiChatsTeardropFill fill="white" />}
          >
            {"  "}
            Gossips
          </MenuItem>
          <MenuItem
            component={<Link to="/homepage" />}
            icon={<PiHeadphonesFill fill="white" />}
          >
            {"  "}
            Hollerspace
          </MenuItem>
        </Menu>
      </Sidebar>
    </section>
  );
};

export default LightPage;
