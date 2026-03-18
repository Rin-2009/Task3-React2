import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Home";
import Play from "./Play";
import Leaderboard from "./Leaderboard";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home";
        break;
      case "/Play":
        document.title = "Play";
        break;
      case "/Leaderboard":
        document.title = "Leaderboard";
        break;
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Play" element={<Play />} />
      <Route path="/Leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default AppContent;
