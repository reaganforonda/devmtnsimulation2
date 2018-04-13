import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default class StepOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.addNewHouse = this.addNewHouse.bind(this);
  }

  // Update State based on input fields
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  //   addNewHouse() {
  //     let house = {
  //       name: this.state.name,
  //       address: this.state.address,
  //       city: this.state.city,
  //       state: this.state.state,
  //       zipcode: this.state.zipcode
  //     };

  //     axios
  //       .post(`http://localhost:4000/api/houses`, house)
  //       .then(result => {
  //         console.log(result.data);
  //       })
  //       .catch(e => console.log(e));

  //     this.setState({ name: "", address: "", city: "", state: "", zipcode: 0 });
  //   }

  render() {
    return (
      <div>
        <div>
          <input
            onChange={e => this.handleInputChange(e)}
            name="name"
            value={this.state.name}
            placeholder="Name"
          />
          <input
            onChange={e => this.handleInputChange(e)}
            name="address"
            value={this.state.address}
            placeholder="Address"
          />
          <input
            onChange={e => this.handleInputChange(e)}
            name="city"
            value={this.state.city}
            placeholder="City"
          />
          <input
            onChange={e => this.handleInputChange(e)}
            name="state"
            value={this.state.state}
            placeholder="State"
          />
          <input
            onChange={e => this.handleInputChange(e)}
            name="zipcode"
            value={this.state.zipcode}
            placeholder="Zipcode"
          />
        </div>
        <div>
          <Link to="/wizard/step2">
            <button>Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}
