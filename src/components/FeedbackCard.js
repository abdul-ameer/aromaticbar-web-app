import React, { useState } from "react";
import { Link } from "react-router-dom";

function FeedbackCard(props) {
    
  const [isChecked, setIsChecked] = useState([]);

  let [forms, setForms] = useState(props.reviews);


  const handleCheckBox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setIsChecked([...isChecked, value]);
    } else {
      setIsChecked(isChecked.filter((e) => e !== value));
    }
  };

  const allDelete = () => {
    isChecked.filter((cert) => {
      let arr = forms.filter((detail) => detail.id !== cert);
      forms = [...arr];
    });

    setForms(forms);
    props.deleteIds(forms);
  };

  return (
    <div className="ui container">
      <div
        style={{ textAlign: "center", overflowX: "scroll" }}
        className="ui single line celled table"
      >
        <table>
          <thead>
            <tr>

              <th>#</th>
              <th>Form details</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone </th>
              <th>
                Please rate the quality of the service you received from your
                host.
              </th>
              <th>Please rate the quality of your beverage.</th>
              <th>Was our restaurant clean ?</th>
              <th>Please rate your overall dining experience.</th>
              
            </tr>
          </thead>
          <tbody>
            {props.reviews.map((form) => (
              <tr key={form.id}>
                <td>
                  <input
                    value={form.id}
                    type="checkbox"
                    checked={form.isChecked}
                    onChange={(e) => {
                      handleCheckBox(e);
                    }}
                  />
                </td>
                <td>
                  {
                    <Link to={`/details/${form.id}`} state={{ feedback: form }}>
                      <p>View Details</p>
                    </Link>
                  }
                </td>
                <td>{form.name}</td>
                <td>{form.email}</td>
                <td>{form.phone}</td>
                <td>{form.host}</td>
                <td>{form.beverage}</td>
                <td>{form.clean}</td>
                <td>{form.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="ui button pink right" onClick={allDelete}>
        Delete
      </button>
    </div>
  );
}
export default FeedbackCard;
