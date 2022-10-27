import React from "react";
import { Link } from "react-router-dom";

const Display = (props) => {
  return (
    <div className="ui main">
      <div className="ui segment">
        <div className="center-div">
          <h1>Aromatic bar</h1>
          <br />

          <div className="ui container">
            <p className="size">
              We are committed to providing you with the best dining experience
              possible, so we welcome your comments. <br />
              Please fill out this questionnaire. <br />
              Thank you.
            </p>
            <div>
              <Link to="/feedback">
                <button className="ui button blue center">Click Here</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
