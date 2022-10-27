import React, { useState } from "react";
import "./Thankyou.css";
import {Link} from "react-router-dom";

import tick from "../Images/tick.png"

export default function Thankyou(props) {

  const [modal, setModal] = useState(props.bool);

  const toggleModal = () => {
    setModal(!modal);
  };
 
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="center-div">

          <div className="modal-content">
            <img src={tick} alt="tick"/>
            <h2>Thank you for providing the  feedback</h2>
            <p>
              We will work towards improving your experience
            </p>
            <Link to={"/view"}>

            <button className="ui purple button">
              Close
            </button>
            </Link>
            </div>

            
          </div>
        </div>
      )}
    </>
  );
}