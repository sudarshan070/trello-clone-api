import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import ErrorOutlineRoundedIcon from "@material-ui/icons/ErrorOutlineRounded";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";

class AuthHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <AppsIcon />
        <HomeIcon />
        <AddOutlinedIcon />
        <ErrorOutlineRoundedIcon />
        <NotificationsNoneRoundedIcon />
      </div>
    );
  }
}

export default AuthHeader;
