import { BrowserRouter } from "react-router-dom";
import { GamesDataProvider } from "./GamesDataContext";
import AppContent from "./AppContent";

function Project3_React2() {
  return (
    <BrowserRouter>
      <GamesDataProvider>
        <AppContent />
      </GamesDataProvider>
    </BrowserRouter>
  );
}

export default Project3_React2;
