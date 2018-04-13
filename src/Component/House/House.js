import React from "react";

export default function House(props) {
  return (
    <div>
      <p>Property Name: {props.house.name}</p>
      <p>Address: {props.house.address}</p>
      <p>City: {props.house.city}</p>
      <p>State: {props.house.state}</p>
      <p>Zipcode : {props.house.zip}</p>
      <img src={props.house.img} alt='pic-of-house'/>
      <p>Morgage : ${props.house.mortgage}</p>
      <p>Rent : ${props.house.rent}</p>
      <button onClick={()=>props.delete(props.house.id)}>Delete</button>
    </div>
  );
}
