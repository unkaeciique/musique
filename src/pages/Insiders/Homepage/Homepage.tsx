import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Input, Avatar } from "antd";
import {
  PiChatsTeardropFill,
  PiHeadphonesFill,
  PiPlusSquareBold,
  PiNewspaperClippingBold,
  PiUserGearBold,
} from "react-icons/pi";
import images from "../../../assets/images/images";
import "./Homepage.scss";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Button } from "antd";

const Homepage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {});
  };

  return (
    <>
      <Sidebar style={{ float: "left" }} width="100%">
        <div>
          <img
            src={images.logodark}
            style={{
              transform: "scale(0.6)",
              margin: "0 30 0 10",
              paddingTop: 20,
            }}
          />
        </div>
        <Menu
          menuItemStyles={{
            button: {
              color: "black",
              margin: "0 10 0 10",
              // [`&.active`]: {
              //   backgroundColor: "#13395e",
              //   color: "#000000",
              // },
            },
          }}
        >
          <MenuItem
            component={<Link to="/homepage" />}
            icon={<PiNewspaperClippingBold />}
          >
            {" "}
            Feed
          </MenuItem>
          <MenuItem
            component={<Link to="/homepage" />}
            icon={<PiChatsTeardropFill />}
          >
            {" "}
            Gossips
          </MenuItem>
          <MenuItem
            component={<Link to="/homepage" />}
            icon={<PiHeadphonesFill />}
          >
            {" "}
            Hollerspace
          </MenuItem>
          <MenuItem component={<div></div>} icon={<PiUserGearBold />}>
            {" "}
            Find
          </MenuItem>
          <MenuItem component={<div></div>} icon={<PiPlusSquareBold />}>
            {" "}
            Create
          </MenuItem>
        </Menu>
      </Sidebar>
      ;
    </>
  );
};

export default Homepage;
