import React from "react";
import { Link, useLocation } from "react-router-dom";

function FeedbackDetails(props) {
  const location = useLocation();
  const { id, name, email, phone, host, beverage, clean, experience } =
    location.state.feedback;

  return (
    <div className="ui main">
      <div className="ui segment">
        <h2 className="center-div">Aromatic bar</h2>
      </div>
      <div className="ui segment">
        <div className="ui content">
          <div className="ui header">Name : {name}</div>
          <div className="ui header">Email : {email}</div>
          <div className="ui header">Phone : {phone}</div>
          <div className="ui header">
            Please rate the quality of the service you received from your host :{" "}
            {host}
          </div>
          <div className="ui header">
            Please rate the quality of your beverage : {beverage}
          </div>
          <div className="ui header">Was our restaurant clean : {clean}</div>
          <div className="ui header">
            Please rate your overall dining experience : {experience}
          </div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/view">
          <button className="ui button green">Back to Feedbacks List</button>
        </Link>
      </div>
    </div>
  );
}

export default FeedbackDetails;
