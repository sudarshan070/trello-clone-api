import React from "react";
import HeroImg from "../images/hero-a.svg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function HomePage() {
  const classes = useStyles();
  return (
    <div className="hero">
      <div className="container paddingTop-3rem ">
        <div className={classes.root}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <div className="hero-heading">
                <h2>
                  Trello lets you work more collaboratively and get more done.
                </h2>

                <h6>
                  Trello’s boards, lists, and cards enable you to organize and
                  prioritize your projects in a fun, flexible, and rewarding
                  way.
                </h6>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img className="img" src={HeroImg} alt="Hero" />
            </Grid>
            <div className="hero-form">
              <input className="input" type="text" placeholder="Email" />
              <NavLink to="/signUp" className="btn-hero">Sign Up - It's Free!</NavLink>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
