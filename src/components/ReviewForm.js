import React, { useState } from "react";
import Thankyou from "./Thankyou";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Ratings from "./Ratings";
import "./App.css";

function ReviewForm(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    host: "",
    beverage: "",
    clean: "",
    experience: "",
  });

  const [phoneInput, setPhoneInput] = useState();

  const [rating, setRating] = useState(false);

  const [bool, setBool] = useState(true);

  const host = (hostRating) => {
    state.host = hostRating;
  };

  const beverage = (beverageRating) => {
    state.beverage = beverageRating;
  };

  const clean = (cleanRating) => {
    state.clean = cleanRating;
  };

  const experience = (experienceRating) => {
    state.experience = experienceRating;
  };

  const add = (e) => {
    e.preventDefault();
    state.phone = phoneInput;

    if (
      state.name === "" ||
      state.email === "" ||
      state.phone === "" ||
      state.clean === "" ||
      state.beverage === "" ||
      state.host === "" ||
      state.experience === ""
    ) {
      setRating(true);
      return;
    }

    props.addFeedbackHandler(state);

    setState({
      name: "",
      email: "",
      phone: "",
      host: "",
      beverage: "",
      clean: "",
      experience: "",
    });
    setBool(false);
  };

  return bool ? (
    <div className="ui main">
      <div className="ui container">
        {rating && (
          <div className="ui negative message">
            <i className="close icon" onClick={(e) => setRating(!rating)} />
            <div className="center-div">
              Please fill the all details of below fields
            </div>
          </div>
        )}

        <div className="ui segment">
          <h2>
            Aromatic bar
            <Link to="/view">
              <button className="ui button green right">View</button>
            </Link>
          </h2>
        </div>

        <form className="ui form" onSubmit={add}>
          <div className="ui segment">
            <div className="ui two fields">
              <div className="field ">
                <label className="required">Customer Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="E.g joe snow"
                  value={state.name}
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                />
              </div>

              <div className="field">
                <label className="required">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="E.g abc@gmail.com"
                  value={state.email}
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="seven wide field">
              <label className="required">Phone</label>
              <PhoneInput
                defaultCountry="IN"
                placeholder="9999999999"
                value={phoneInput}
                onChange={(value) => setPhoneInput(value)}
              />
            </div>
            <div className="ui two fields">
              <div className="field">
                <label className="required">
                  Please rate the quality of the service you received from your
                  host.
                </label>
                <Ratings host={host} />
              </div>
              <div className="field ">
                <label className="required">
                  Please rate the quality of your beverage.
                </label>
                <Ratings beverage={beverage} />
              </div>
            </div>
            <div className="ui two fields">
              <div className="field =">
                <label className="required">Was our restaurant clean?</label>
                <Ratings clean={clean} />
              </div>
              <div className="field ">
                <label className="required">
                  Please rate your overall dining experience
                </label>
                <Ratings experience={experience} />
              </div>
            </div>
          </div>

          <button className="ui green button right">Submit Review</button>
        </form>
      </div>
    </div>
  ) : (
    <Thankyou bool={!bool} />
  );
}

export default ReviewForm;
