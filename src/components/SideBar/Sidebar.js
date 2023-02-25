import React from "react";
import { sideBarIcons, sideBarName } from "../config";
import "./Sidebar.css";
export default function Sidebar({ toggleSidebar }) {
  return (
    <div className={`${toggleSidebar ? "sidebar" : ""}`}>
      {!toggleSidebar
        ? sideBarIcons.map((icons) => {
            return (
              <div
                className={`sidebar-row ${icons.selected ? "selected" : ""}`}
              >
                <div className="sidebar-icon">{icons.icon}</div>
              </div>
            );
          })
        : sideBarName.map((icons) => {
            return (
              <div
                className={`sidebar-row ${icons.selected ? "selected" : ""}`}
              >
                <div className="sidebar-icon">
                  {icons.icon} <p>{icons.name}</p>
                </div>
              </div>
            );
          })}
    </div>
  );
}
