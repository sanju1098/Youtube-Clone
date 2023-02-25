import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { YoutubeLogo } from "../config";

export default function Navbar(props) {
  const [inputsearch, setinputsearch] = useState("");
  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon
          onClick={() => {
            props.onClickMenu();
          }}
        />
        <Link to="/">
          <img className="header-logo" src={YoutubeLogo} alt="Youtube Logo" />
        </Link>
      </div>
      <div className="header-input">
        <input
          onChange={(e) => setinputsearch(e.target.value)}
          value={inputsearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputsearch}`}>
          <SearchIcon style={{ color: "black" }} sx={{ fontSize: 25 }} />
        </Link>
      </div>
      <div className="header-icons">
        <VideoCallIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <NotificationsIcon className="header-icon" />
        <Avatar sx={{ bgcolor: "#4472d1", width: 35, height: 35 }}>SK</Avatar>
      </div>
    </div>
  );
}
