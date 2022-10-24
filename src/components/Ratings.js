import React, { useState } from "react";

function Ratings(props) {
  const [state, setState] = useState({
    Excellent: false,
    Fair: false,
    Good: false,
    Bad: false,
  });

 

  const handleCheckbox = (event) => {
    const data = {
      Excellent: false,
      Fair: false,
      Good: false,
      Bad: false,
    };

    data[event.target.value] = event.target.checked;
    setState(data);

  

    if (props.hasOwnProperty("host")) {
      props.host(event.target.value);
    } else if (props.hasOwnProperty("beverage")) {
      props.beverage(event.target.value);
    } else if (props.hasOwnProperty("clean")) {
      props.clean(event.target.value);
    } else {
      props.experience(event.target.value);
    }
  };

  return (
    <div className="inline fields">
      <div className="field">
        <div className="ui checkbox">
          <input
            type="checkbox"
            name="Excellent"
            value="Excellent"
            checked={state.Excellent}
            onChange={handleCheckbox}
          />
          <label>Excellent</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input
            type="checkbox"
            name="Fair"
            value="Fair"
            checked={state.Fair}
            onChange={handleCheckbox}
          />
          <label>Fair</label>
        </div>
      </div>

      <div className="field">
        <div className="ui checkbox">
          <input
            type="checkbox"
            name="Good"
            value="Good"
            checked={state.Good}
            onChange={handleCheckbox}
          />
          <label>Good</label>
        </div>
      </div>
      <div className="field">
        <div className="ui  checkbox">
          <input
            type="checkbox"
            name="Bad"
            value="Bad"
            checked={state.Bad}
            onChange={handleCheckbox}
          />
          <label>Bad</label>
        </div>
      </div>
    </div>
  );
}

export default Ratings;
