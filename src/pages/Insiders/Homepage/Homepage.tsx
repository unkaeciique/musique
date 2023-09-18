import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

import "./Homepage.scss";
import LightPage from "../../../layout/LightPage/LightPage";
import ThoughtPost from "../../../components/ThoughtPost/ThoughtPost";

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
      <LightPage />
      <section className="news-feed">
        <ThoughtPost />
        <ThoughtPost />
      </section>
    </>
  );
};

export default Homepage;
