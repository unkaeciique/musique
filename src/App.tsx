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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
