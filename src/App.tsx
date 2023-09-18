import "./App.css";

import "./fonts/MabryPro-Bold.ttf";
import "./fonts/MabryPro-Regular.ttf";
import "./fonts/MabryPro-Medium.ttf";
import "./fonts/MabryPro-Light.ttf";
import "./fonts/MabryPro-Italic.ttf";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/AllUsers/LandingPage/LandingPage";
import Login from "./pages/AllUsers/Login/Login";
import Homepage from "./pages/Insiders/Homepage/Homepage";
import Hollerspace from "./pages/Insiders/Hollerspace/Hollerspace";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/holler" element={<Hollerspace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
