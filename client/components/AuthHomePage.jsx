import React from "react";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import CollectionsBookmarkOutlinedIcon from "@material-ui/icons/CollectionsBookmarkOutlined";
import TimelineIcon from "@material-ui/icons/Timeline";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { NavLink } from "react-router-dom";

function AuthHomePage() {
  return (
    <div className="authHomePage-container">
      <div className="authHomepage-left-right">
        <div className="authHomePage-left">
          <div>
            <ul className="authHomePage-nav">
              <li>
                <NavLink to="/">
                  <DashboardOutlinedIcon />
                  <span>Board</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <CollectionsBookmarkOutlinedIcon />
                  <p>Template</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <TimelineIcon />
                  <p>Home</p>
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2>Teams</h2>
            <div>
              <NavLink to="/">
                <AddOutlinedIcon />
                <p>Create a Team</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="authHeader-center-container">
        <div className="authHeader-center-container-img"></div>
        <div className="authHeader-center-container-text">
          <h3>Stay on track and up to date</h3>
          <p>
            Invite people to boards and cards, leave comments, add due dates,
            and we'll show the most important activity here.
          </p>
        </div>
      </div>
      <div className="authHomepage-left-right">
        <div className="authHomepage-right">
          <div>
            <div>
              <ScheduleIcon />
              <p>Recently Viewed</p>
            </div>
          </div>
          <div>
            <h2>Links</h2>
            <div>
              <NavLink to="/">
                <AddOutlinedIcon />
                <p>Create a board</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthHomePage;
