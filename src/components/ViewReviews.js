import React, { useRef } from "react";
import FeedbackCard from "./FeedbackCard";
import "./App.css";
import { Link } from "react-router-dom";

const ViewReviews = (props) => {
  const inputElement = useRef("");

  const deleteFeedbackHandler = (data) => {
    props.getFormState(data);
  };

  const getSearchTerm = () => {
    props.searchKeyword(inputElement.current.value);
  };

  return (
    <div className="ui container">
      <div className="ui main">
        <h2 className="ui left floated header">Aromatic bar</h2>
        <div>
          <Link to="/feedback">
            <button className="ui right floated green button">Add New</button>
          </Link>
        </div>

        <div className="ui right floated icon input">
          <input
            ref={inputElement}
            type="text"
            placeholder="Search..."
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>

        {
          <FeedbackCard
            reviews={props.feedbacks}
            deleteIds={deleteFeedbackHandler}
          />
        }
      </div>
    </div>
  );
};

export default ViewReviews;
