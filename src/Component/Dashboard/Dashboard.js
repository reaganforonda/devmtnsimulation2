import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
        houses : []
    };

    this.getAllHouses = this.getAllHouses.bind(this);
  }

  componentDidMount(){
      this.getAllHouses()
  }

  getAllHouses(){
      axios.get('http://localhost:4000/api/houses').then((result) => {
          this.setState({houses : result.data});
      })
  }

  render() {
      let arrHouses = this.state.houses.map((house) => {
          return (
              <div key={house.id}>
<House house={house}/>
              </div>
          )
      })
    return (
      <div>
        Dashboard Component
        <Link to={`/wizard`}>
          <button>Add New Property</button>
        </Link>
        {arrHouses}
      </div>
    );
  }
}
