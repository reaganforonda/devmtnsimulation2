import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";
import "./dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: []
    };

    this.getAllHouses = this.getAllHouses.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  componentDidMount() {
    this.getAllHouses();
  }

  getAllHouses() {
    axios
      .get("http://localhost:4000/api/houses")
      .then(result => {
        this.setState({ houses: result.data });
      })
      .catch(e => {
        console.log(`Houston we have a problem : ${e}`);
      });
  }

  deleteHouse(id) {
    axios
      .delete(`http://localhost:4000/api/houses/${id}`)
      .then(result => {
        this.setState({ houses: result.data });
        this.getAllHouses();
      })
      .catch(e => {
        console.log(`Houston we have a problem : ${e}`);
      });
  }

  render() {
    let arrHouses = this.state.houses.map(house => {
      return (
        <div key={house.id}>
          <House house={house} delete={this.deleteHouse} />
        </div>
      );
    });
    return (
      <div className="dashboard-container">
      
        <div className="h1-button">
          <h1 className="comp-h1">Dashboard</h1>
          <Link to={`/wizard/step1`}>
            <button className="add-prop-button">Add New Property</button>
          </Link>
        </div>

        <hr />
        <h2>Home Listings</h2>
        <div className='housing-list'>{arrHouses}</div>
      </div>
    );
  }
}
