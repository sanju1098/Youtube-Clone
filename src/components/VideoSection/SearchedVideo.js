import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Avatar } from "@mui/material";
import "./VideoSection.css";
import { searchedData } from "../config";

export default function SearchedVideo({ toggleSidebar }) {
  return (
    <div className="search-page">
      <h1>
        <TuneIcon /> &nbsp; Searched Data
      </h1>
      <hr />

      <Avatar sx={{ bgcolor: "#a79ede", width: 35, height: 35 }}>YT</Avatar>
      <h4>
        Youtube Channel Test <CheckCircleOutlineOutlinedIcon />
        <br />
        1M Subscribers. 292 Videos
      </h4>
      <hr />
      {searchedData.map((search) => {
        return (
          <div className="video-row">
            <img src={search.image} alt={search.title} />
            <div className="video-row-txt">
              <Avatar
                sx={{
                  bgcolor: `#${search.avatarColor}`,
                  width: 35,
                  height: 35
                }}
              >
                {search.avatarText}
              </Avatar>
              <p>{search.channel}</p>
              <h3>{search.title}</h3>
              <p className="video-row-headline">
                {search.views} Views. Uploaded - {search.timestamp}
              </p>
              <p className="video-row-description">{search.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
