import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Display from "./Display";
import ReviewForm from "./ReviewForm";
import ViewReviews from "./ViewReviews";
import FeedbackDetails from "./FeedbackDetails";

function App() {
  const LOCAL_STORAGE_KEY = "feedbacks";

  const [feedbacks, setFeedbacks] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const addFeedbackHandler = (feedback) => {
    setFeedbacks([...feedbacks, { id: uuid(), ...feedback }]);
  };

  const removeFeedbackHandler = (data) => {
    setFeedbacks([...data]);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newFeedbackList = feedbacks.filter((feedback) => {
        return Object.values(feedback)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newFeedbackList);
    } else {
      setSearchResults(feedbacks);
    }
 
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Display />} />
          <Route
            path="/feedback"
            element={<ReviewForm addFeedbackHandler={addFeedbackHandler} />}
          />
          <Route
            path="/view"
            element={
              <ViewReviews
                feedbacks={searchTerm.length < 1 ? feedbacks : searchResults}
                getFormState={removeFeedbackHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route path="/details/:id" element={<FeedbackDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
