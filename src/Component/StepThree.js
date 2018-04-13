import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { updateMortgage, cancel, updateRent } from "../ducks/reducer";

export class StepThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0,
      img: "",
      mortgage: 0,
      rent: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewHouse = this.addNewHouse.bind(this);
    this.updateReduxState = this.updateReduxState.bind(this);
  }

  // Update State based on input fields
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addNewHouse() {
    let house = {
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zipcode: this.props.zipcode,
      mortgage : this.state.mortgage,
      rent : this.state.rent
    };

    axios
      .post(`http://localhost:4000/api/houses`, house)
      .then(result => {
        console.log(result.data);
      })
      .catch(e => console.log(e));

      this.props.cancel();
  }

  // Update State when Component Loads
  // Using values stored in Redux - set them to state
  componentDidMount() {
    this.setState({
      mortgage: this.props.mortgage,
      rent: this.props.rent
    });
  }

  updateReduxState() {
    this.props.updateMortgage(this.state.mortgage);
    this.props.updateRent(this.state.rent);
  }

  render() {
    return (
      <div>
        <div>
          Monthly Mortgage Amount
          <input
            onChange={e => this.handleInputChange(e)}
            name="mortgage"
            value={this.state.mortgage}
            placeholder="Mortgage"
          />
        </div>

        <div>
          Desired Monthly Rent
          <input
            onChange={e => this.handleInputChange(e)}
            name="rent"
            value={this.state.rent}
            placeholder="Monthly Rent"
          />
        </div>
        <div>
          <Link onClick={() => this.updateReduxState()} to="/wizard/step2">
            <button>Previous Step</button>
          </Link>
          <Link to="/">
            <button onClick={() => this.addNewHouse()}> Complete</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mortgage: state.mortgage,
    rent: state.rent
  };
}

export default connect(mapStateToProps, { updateMortgage, updateRent })(
  StepThree
);
