import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// Setting our data inside the card component via props
function Card(props) {
  return (
    <div className="card">
      <AccountCircleIcon className="profile" style={{ fontSize: 80 }} />
      <h1>{props.name}</h1>
      <p>{props.position}</p>
      <p>{props.location}</p>
      <p>{props.number}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
