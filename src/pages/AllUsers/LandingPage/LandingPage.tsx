import React from "react";
import { Link } from "react-router-dom";
import images from "../../../assets/images/images";
import { Button, Space } from "antd";
import "./LandingPage.scss";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <>
      <nav className="bg-white">
        <img src={images.logodark} className="center" />
      </nav>

      <section>
        <div className="land1"></div>
      </section>

      <footer className="bg-black">
        <Space size={700}>
          <img src={images.logolight} />

          <Space size={26}>
            <Button
              type="link"
              shape="circle"
              icon={<FaFacebook />}
              size={"large"}
              className="footer-link"
            />
            <Button
              type="link"
              shape="circle"
              icon={<FaTwitter />}
              size={"large"}
              className="footer-link"
            />
            <Button
              type="link"
              shape="circle"
              icon={<FaInstagram />}
              size={"large"}
              className="footer-link"
            />
            <Button
              type="link"
              shape="circle"
              icon={<FaPinterest />}
              size={"large"}
              className="footer-link"
            />
          </Space>
        </Space>
      </footer>
    </>
  );
};

export default LandingPage;
