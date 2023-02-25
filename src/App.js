import "./index.css";
import { Routes, Route } from "react-router-dom";

import { useState } from "react";
import Sidebar from "./components/SideBar/Sidebar";
import Navbar from "./components/NavBar/Navbar";
import VideoContainer from "./components/VideoSection/VideoContainer";
import SearchedVideo from "./components/VideoSection/SearchedVideo";

export default function App() {
  const [isToggledSidebar, setIsToggledSideBar] = useState(false);

  return (
    <div className="App">
      <Navbar
        onClickMenu={() => setIsToggledSideBar((isToggled) => !isToggled)}
      />
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={[
              <Sidebar toggleSidebar={isToggledSidebar} />,
              <VideoContainer toggleSidebar={isToggledSidebar} />
            ]}
          />
          <Route
            path="/search/:searchTerm"
            element={[
              <Sidebar toggleSidebar={isToggledSidebar} />,
              <SearchedVideo />
            ]}
          />
        </Routes>
      </div>
    </div>
  );
}
