import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "./ThoughtPost.scss";
import images from "../../assets/images/images";
import {
  PiChatCenteredTextBold,
  PiPlusCircleBold,
  PiWarningBold,
  PiEyeClosedBold,
  PiArrowRightBold,
  PiHeartBold,
  PiSmileyBold,
  PiSmileySadBold,
  PiSmileyAngryBold,
  PiSmileyMehBold,
  PiListBold,
  PiDotOutlineFill,
} from "react-icons/pi";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Favorite",
    key: "fav",
    icon: <PiHeartBold />,
  },
  {
    label: "Hide Post",
    key: "hide",
    icon: <PiEyeClosedBold />,
  },
  {
    label: "Report Post",
    key: "report",
    icon: <PiWarningBold />,
    danger: true,
  },
];

const ThoughtPost = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [contents, setContents] = useState([
    "This is the first line of text.",
    "This is the second line of text.",
    "This is the third line of text.",
    "This is the fourth line of text.",
    "This is the fifth line of text.",
    "This is the sixth line of text.",
    "This is the seventh line of text.",
    "This is the eighth line of text.",
    "This is the ninth line of text.",
    "This is the tenth line of text.",
  ]);

  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  return (
    <div className="thought-post">
      <div className="post-container">
        <div className="post-header">
          <img className="user-avatar" src={images.avatar} alt="User Avatar" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span className="username"> @ unkaieovire</span>
            <Dropdown
              menu={{ items }}
              placement="bottomLeft"
              trigger={["click"]}
            >
              <Button icon={<PiListBold />} size="large" type="text" />
            </Dropdown>
          </div>
        </div>
        <img className="post-image" src={images.bloom} alt="Post Image" />
        <div>
          <p className="caption">Bloom by Beach House</p>
          <p className="time">13 hours ago</p>
        </div>
        <div>
          <Space.Compact block className="post-footer">
            <div className="post-reacts">
              <div className="react">
                <PiSmileyBold className="smile" />
              </div>
              <div className="react">
                <PiSmileyMehBold className="meh" />
              </div>
              <div className="react">
                <PiSmileySadBold className="sad" />
              </div>
              <div className="react">
                <PiSmileyAngryBold className="angry" />
              </div>
              <div className="text flex flex-row justify-center items-center">
                <PiPlusCircleBold /> <PiDotOutlineFill /> 62K
              </div>
            </div>
            <div className="comment-button" onClick={togglePanel}>
              <div className="comment-text flex flex-row justify-center items-center h-full">
                <PiChatCenteredTextBold />
                <PiDotOutlineFill /> 26K
              </div>
            </div>
            <div className="direct-link">
              <div className="direct flex flex-row justify-center items-center h-full">
                <PiArrowRightBold style={{ fill: "white" }} />
              </div>
            </div>
          </Space.Compact>
        </div>
      </div>
      <div>
        {showPanel && (
          <div className="comment-panel">
            <div className="comment-single">
              <img
                className="comment-avatar"
                src={images.avatar}
                alt="User Avatar"
              />
              <span className="mx-2">
                <p className="comment-username">unkaieovire</p>
                <p className="comment-desc my-2">This is my fav.</p>
              </span>
            </div>
            <div className="comment-input">
              <img
                className="comment-avatar"
                src={images.avatar}
                alt="User Avatar"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThoughtPost;
