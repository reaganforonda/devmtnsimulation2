import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "./reset.css";
import "./wizard.css";

import StepOne from "../StepOne";
import StepTwo from "../StepTwo";
import StepThree from "../StepThree";
import { connect } from "react-redux";
import { cancel } from "../../ducks/reducer";

export class Wizard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Link onClick={() => this.props.cancel} to="/">
            <button className="cancel-button">Cancel</button>
          </Link>
        </div>
        <Route path="/wizard/step1" component={StepOne} />
        <Route path="/wizard/step2" component={StepTwo} />
        <Route path="/wizard/step3" component={StepThree} />
      </div>
    );
  }
}

export default connect(null, { cancel })(Wizard);
