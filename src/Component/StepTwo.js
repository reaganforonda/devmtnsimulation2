import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default class StepTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0,
      img : ''
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

//     this.setState({ name: "", address: "", city: "", state: "", zipcode: 0, img:'' });
//   }

  render() {
    return (
      <div>
          <div>
          Image URL
        <input
          onChange={e => this.handleInputChange(e)}
          name="img"
          value={this.state.img}
          placeholder=""
        />
        </div>

        <div>
            <Link to='/wizard/step1'>
            <button>Previous Step</button>
            </Link>
            <Link to ='/wizard/step3'>
                <button>Next Step</button>
            </Link>
        </div>
      </div>
    );
  }
}
