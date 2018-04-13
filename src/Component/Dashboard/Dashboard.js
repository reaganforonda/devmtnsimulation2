import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
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
