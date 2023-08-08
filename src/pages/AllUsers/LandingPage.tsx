import React from "react";
import images from "../../assets/images/images";
import { Layout, Button, Space } from "antd";
import "./LandingPage.scss";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const { Header, Content, Footer } = Layout;

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Layout className="layout">
          <Header className="header">
            <img src={images.logodark} className="logo-header" />
            <button className="login-button">Login</button>
          </Header>
          <Content>
            <div className="land1">
              <button className="land1-button">Join us now</button>
            </div>

            <div className="land2">
              <div>
                <button className="land2-button button-aurora" disabled>
                  AURORA
                </button>
                <button className="land2-button button-taylor" disabled>
                  Taylor Swift
                </button>
                <button className="land2-button button-lana" disabled>
                  Lana Del Rey
                </button>
              </div>
            </div>

            <div className="land3">
              <img src={images.land3} />
            </div>

            <div className="land4">
              <img src={images.land4} />
            </div>

            <div className="land5">
              <img src={images.land5} />
            </div>
          </Content>
          <Footer className="footer">
            <Space size={700}>
              <img src={images.logolight} />

              <Space size={26}>
                <Button
                  type="link"
                  shape="circle"
                  icon={<FaFacebook />}
                  size={"large"}
                  ghost
                  className="footer-link"
                />
                <Button
                  type="link"
                  shape="circle"
                  icon={<FaTwitter />}
                  size={"large"}
                  ghost
                  className="footer-link"
                />
                <Button
                  type="link"
                  shape="circle"
                  icon={<FaInstagram />}
                  size={"large"}
                  ghost
                  className="footer-link"
                />
                <Button
                  type="link"
                  shape="circle"
                  icon={<FaPinterest />}
                  size={"large"}
                  ghost
                  className="footer-link"
                />
              </Space>
            </Space>
          </Footer>
        </Layout>
      </>
    );
  }
}
