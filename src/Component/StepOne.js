import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import "./reset.css";
import "./stepone.css";

import {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZipcode
} from "../ducks/reducer";

export class StepOne extends Component {
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
    this.updateReduxState = this.updateReduxState.bind(this);
  }

  // Update State when Component Loads
  // Using values stored in Redux - set them to state
  componentDidMount() {
    this.setState({
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zipcode: this.props.zipcode
    });
  }

  // Update State based on input fields
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Update State on Redux Store
  updateReduxState() {
    this.props.updateName(this.state.name);
    this.props.updateCity(this.state.city);
    this.props.updateAddress(this.state.address);
    this.props.updateState(this.state.state);
    this.props.updateZipcode(this.state.zipcode);
  }

  render() {
    return (
      <div className="add-listing-container">
        <div className='top'>
          <h1>ADD LISTING</h1>
        </div>
        <div className='inputs'>
          <h3>Property Name</h3>
          <input
            onChange={e => this.handleInputChange(e)}
            name="name"
            value={this.state.name}
            placeholder="Name"
          /><br/>
          <h3>Address</h3>
          <input
            onChange={e => this.handleInputChange(e)}
            name="address"
            value={this.state.address}
            placeholder="Address"
          /><br/>
          <h3>City</h3>
          <input
            onChange={e => this.handleInputChange(e)}
            name="city"
            value={this.state.city}
            placeholder="City"
          /><br/>
          <h3>State</h3>
          <input
            onChange={e => this.handleInputChange(e)}
            name="state"
            value={this.state.state}
            placeholder="State"
          /><br/>
          <h3>Zip</h3>
          <input
            onChange={e => this.handleInputChange(e)}
            name="zipcode"
            value={this.state.zipcode}
            placeholder="Zipcode"
          /><br/>
        </div>
        <div>
        <Link onClick={() => this.updateReduxState()} to="/wizard/step2">
            <button>Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode
  };
}

export default connect(mapStateToProps, {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZipcode
})(StepOne);
