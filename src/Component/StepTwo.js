import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { updateIMG } from "../ducks/reducer";

export class StepTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateReduxState = this.updateReduxState.bind(this);
  }

  // Update State when Component Loads
  // Using values stored in Redux - set them to state
  componentDidMount() {
    this.setState({
      img: this.props.img
    });
  }

  // Update State based on input fields
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  updateReduxState() {
    this.props.updateIMG(this.state.img);
  }

  render() {
    console.log(this.props.name);
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
          <Link onClick={() => this.updateReduxState()} to="/wizard/step1">
            <button>Previous Step</button>
          </Link>
          <Link onClick={() => this.updateReduxState()} to="/wizard/step3">
            <button>Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    img: state.img
  };
}

export default connect(mapStateToProps, { updateIMG })(StepTwo);
