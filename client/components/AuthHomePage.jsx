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
                <NavLink to="/" className="authHomePage-link authHomePage-hover">
                  <DashboardOutlinedIcon
                    style={{
                      display: "block",
                      color: "#42526e",
                      width: "32px",
                      textAlign: "center",
                      fontSize: "1rem",
                    }}
                  />
                  <span>Board</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="authHomePage-link authHomePage-hover">
                  <CollectionsBookmarkOutlinedIcon
                    style={{
                      display: "block",
                      color: "#42526e",
                      width: "32px",
                      textAlign: "center",
                      fontSize: "1rem",
                    }}
                  />
                  <p>Template</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="authHomePage-link authHomePage-hover">
                  <TimelineIcon
                    style={{
                      display: "block",
                      color: "#42526e",
                      width: "32px",
                      textAlign: "center",
                      fontSize: "1rem",
                    }}
                  />
                  <p>Home</p>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="authHomePage-left-team">
            <div className="authHomePage-left-team-heading">
              <h2>Teams</h2>
            </div>

            <div className="authHomePage-addBoard">
              <NavLink to="/" className="authHomePage-link authHomePage-hover">
                <AddOutlinedIcon
                  style={{
                    display: "block",
                    color: "#5e6c84",
                    width: "32px",
                    textAlign: "center",
                    fontSize: "1rem",
                  }}
                />
                <div className="authHomepage-p">
                  <p>Create a Team</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="authHeader-center-container">
        <div className="authHeader-center-container-box">
          <div className="authHeader-center-container-img center-img"></div>
          <div className="authHeader-center-container-text">
            <h3>Stay on track and up to date</h3>
            <p>
              Invite people to boards and cards, leave comments, add due dates,
              and we'll show the most important activity here.
            </p>
          </div>
        </div>
      </div>
      <div className="authHomepage-left-right">
        <div className="authHomepage-right">
          <div className="authHomePage-link authHomePage-recently">
            <ScheduleIcon
              style={{
                display: "block",
                color: "#5e6c84",
                width: "32px",
                textAlign: "center",
                fontSize: "1rem",
              }}
            />
            <div className="authHomepage-p">
              <p>Recently Viewed</p>
            </div>
          </div>

          <div>
            <div className="authHomePage-left-team-heading">
              <h2>Links</h2>
            </div>
            <div className="authHomePage-addBoard">
              <NavLink to="/" className="authHomePage-link authHomePage-hover">
                <AddOutlinedIcon
                  style={{
                    display: "block",
                    color: "#5e6c84",
                    width: "32px",
                    textAlign: "center",
                    fontSize: "1rem",
                  }}
                />
                <div className="authHomepage-p">
                  <p>Create a board</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthHomePage;
