import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import ErrorOutlineRoundedIcon from "@material-ui/icons/ErrorOutlineRounded";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { NavLink } from "react-router-dom";

import { withStyles, fade } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    color: "#fff",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.9),
      color: "#777777",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(0.6, 0, 0.6, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
});

class AuthHeader extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className="autHeader">
          <div className="authHeader-left-icons">
            <div className="authHeader-icon-bg">
              <AppsIcon style={{ fontSize: 18 }} />
            </div>
            <div className="authHeader-icon-bg">
              <HomeIcon style={{ fontSize: 18 }} />
            </div>
            <div className="authHeader-icon-bg authHeader-icon-boards">
              <DashboardOutlinedIcon style={{ fontSize: 18 }} />
              <span>Boards</span>
            </div>
            <div className="search-icon">
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon style={{ fontSize: 18 }} />
                </div>
                <InputBase
                  style={{ fontSize: 18 }}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </div>
            <div
              className="only-search-icon authHeader-icon-bg"
              style={{ fontSize: 18 }}
            >
              <SearchIcon />
            </div>
          </div>

          <NavLink to="/" className="authHeader-logo">
            <div className="authHeader-logo-left"></div>
            <div className="authHeader-logo-right"></div>
          </NavLink>

          <div className="authHeader-right-icons">
            <div className="authHeader-icon-bg">
              <AddOutlinedIcon style={{ fontSize: 18 }} />
            </div>
            <div className="authHeader-icon-bg">
              <ErrorOutlineRoundedIcon style={{ fontSize: 18 }} />
            </div>
            <div className="authHeader-icon-bg">
              <NotificationsNoneRoundedIcon style={{ fontSize: 18 }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AuthHeader);
