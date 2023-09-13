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
  PiShootingStarBold,
} from "react-icons/pi";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space, Input } from "antd";

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

  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  return (
    <div className="thought-post">
      <div className="post-container h-full">
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
              <div className="comment-text hover:bg-slate-200 flex flex-row justify-center items-center h-full">
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

      {showPanel && (
        <div className="comment-panel max-h-96">
          <div className="flex flex-row gap-1 m-2.5 justify-items-stretch">
            <img
              className="rounded-md w-14 h-14 border-solid border-black border-2"
              src={images.avatar2}
              alt="User Avatar"
            />
            <div className="mx-2">
              <p className="m-0 text-xl text-black">diskosaiq</p>
              <p className="text-xl text-black comment-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
            <p className="comment-time text-slate-600">13h</p>
          </div>

          <div className="flex flex-row gap-1 m-2.5 justify-items-stretch">
            <img
              className="rounded-md w-14 h-14 border-solid border-black border-2"
              src={images.avatar2}
              alt="User Avatar"
            />
            <div className="mx-2">
              <p className="m-0 text-xl text-black">diskosaiq</p>
              <p className="text-xl text-black comment-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Semper risus in hendrerit
              </p>
            </div>
            <p className="comment-time text-slate-600">13h</p>
          </div>

          <div className="flex flex-row m-4 sticky">
            <img
              className="rounded-md w-14 h-14 border-solid border-black border-2"
              src={images.avatar}
              alt="User Avatar"
            />
            <Space.Compact className="">
              <input
                placeholder="What do you think?"
                className="comment-input mx-2 p-3 h-full w-80 rounded-md"
              />
              <button className="send-button flex flex-row gap-2 justify-center items-center text-white bg-blue-700 border-black border-solid rounded-md border-2">
                Shoot
                <PiShootingStarBold style={{ fill: "white" }} />
              </button>
            </Space.Compact>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThoughtPost;
