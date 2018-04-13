import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import {connect} from 'react-redux';

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
  }

  // Update State based on input fields
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addNewHouse() {
    let house = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode
    };

    axios
      .post(`http://localhost:4000/api/houses`, house)
      .then(result => {
        console.log(result.data);
      })
      .catch(e => console.log(e));

    this.setState({
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0,
      img: "",
      mortgage: 0,
      rent: 0
    });
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
            <Link to='/wizard/step2'>
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

function mapStateToProps(state){
  return {
    mortgage : state.mortgage,
    rent : state.rent
  };
};

export default connect(mapStateToProps)(StepThree);