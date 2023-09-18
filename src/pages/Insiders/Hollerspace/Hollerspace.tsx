import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

import "./Hollerspace.scss";
import DarkPage from "../../../layout/DarkPage/DarkPage";

const Hollerspace = () => {
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
      <DarkPage />
      <section className="main-space"></section>
    </>
  );
};

export default Hollerspace;
