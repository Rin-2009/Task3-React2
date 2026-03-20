import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import Color_Match from "./Color_Match";
import Leaderboard from "./Leaderboard";
import Color_Memory_Master from "./Color_Memory_Master";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home";
        break;
      case "/Color_Match":
        document.title = "Color_Match";
        break;
      case "/Leaderboard":
        document.title = "Leaderboard";
        break;

      case "/Color_Memory_Master":
        document.title = "Color_Memory_Master";
        break;
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Color_Match" element={<Color_Match />} />
      <Route path="/Leaderboard" element={<Leaderboard />} />
      <Route path="/Color_Memory_Master" element={<Color_Memory_Master />} />
    </Routes>
  );
}

export default AppContent;
