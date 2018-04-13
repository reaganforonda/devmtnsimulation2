import React from "react";

export default function House(props) {
  return (
    <div>
      <p>Property Name: {props.house.name}</p>
      <p>Address: {props.house.address}</p>
      <p>City: {props.house.city}</p>
      <p>State: {props.house.state}</p>
      <p>Zipcode : {props.house.zipcode}</p>
      <button>Delete</button>
    </div>
  );
}
