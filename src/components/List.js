import React from "react";
import Card from "./Card";

function List(props) {
  // Setting the recived data on list component to the Card component via props(drilling)
  let users = props.filteredUsers.map((user, i) => {
    return (
      <Card
        key={i}
        name={user.name}
        position={user.position}
        location={user.location}
        number={user.number}
        email={user.email}
      />
    );
  });

  if (users.length !== 0) return <div>{users}</div>;

  // When the user enters a non-existent employe we then show this message on the UI.
  if (users.length === 0)
    return <p className="message">There is no such an employee!</p>;
}

export default List;
