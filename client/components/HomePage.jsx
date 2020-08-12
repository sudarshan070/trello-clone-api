import React, { Component } from "react";
import HeroImg from "../images/hero-a.svg"


class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="hero">
          <div className="container">
            <div className="flex-sb paddingTop-3rem">
              <div className='col-48'>
                <h2>
                  Trello lets you work more collaboratively and get more done.
                </h2>
                <h6>
                  Trello’s boards, lists, and cards enable you to organize and
                  prioritize your projects in a fun, flexible, and rewarding
                  way.
                </h6>
              </div>
              <div className='col-48'>
                <img className="img" src={HeroImg} alt="Hero"/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
