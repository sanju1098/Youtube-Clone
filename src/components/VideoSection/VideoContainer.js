import React from "react";
import { youtubeData } from "../config";
import { Avatar } from "@mui/material";
import "./VideoSection.css";

export default function VideoContainer({ toggleSidebar }) {
  return (
    <div
      className="videos-container"
      style={{ flex: toggleSidebar ? "1" : "" }}
    >
      <div className="videos-container-card">
        {youtubeData.map((ytData) => {
          return (
            <div className="video-card">
              <img
                className="videocard-thumbnail"
                src={ytData.image}
                alt="video"
              />
              <div className="video-info">
                <Avatar
                  sx={{ bgcolor: ytData.avatarColor, width: 35, height: 35 }}
                >
                  {ytData.avatarText}
                </Avatar>
                <div className="video-text">
                  <h4>{ytData.title}</h4>
                  <p>{ytData.channel}</p>
                  <p>
                    {ytData.views}.{ytData.timestamp}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
