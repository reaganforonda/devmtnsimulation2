import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
        houses : []
    };
  }

  render() {
      let arrHouses = this.state.houses.map((house) => {
          return (
              <div key={house.id}>
                <p>Property Name: {house.name}</p>
                <p>Address: {house.address}</p>
                <p>City: {house.city}</p>
                <p>State: {house.state}</p>
                <p>Zipcode : {house.zipcode}</p>
              </div>
          )
      })
    return (
      <div>
        Dashboard Component
        <Link to={`/wizard`}>
          <button>Add New Property</button>
        </Link>
        <House />
      </div>
    );
  }
}
