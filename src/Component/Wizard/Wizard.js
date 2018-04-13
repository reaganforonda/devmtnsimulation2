import React, {Component} from 'react';
import { Link, Route } from "react-router-dom";
import axios from 'axios';

import StepOne from '../StepOne';
import StepTwo from '../StepTwo';
import StepThree from '../StepThree';
import { connect } from "react-redux";
import {cancel} from '../../ducks/reducer';

export class Wizard extends Component{
    constructor(props){
        super(props);

        // this.state = {
        //     name : '',
        //     address : '',
        //     city : '',
        //     state : '',
        //     zipcode : 0
        // }

        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.addNewHouse = this.addNewHouse.bind(this);
    }

    // Update State based on input fields
    // handleInputChange(e){
    //     this.setState({[e.target.name] : e.target.value})
    // }

    // addNewHouse(){
    //     let house = {
    //         name : this.state.name,
    //         address : this.state.address,
    //         city : this.state.city,
    //         state : this.state.state,
    //         zipcode : this.state.zipcode
    //     }

    //     axios.post(`http://localhost:4000/api/houses`, (house)).then((result) => {
    //         console.log(result.data);
    //     }).catch((e) => console.log(e));

    //     this.setState({name : '', address : '', city : '', state :'' , zipcode : 0});
    // }


    render(){
        return (
            <div>
                Wizard Component
                <Link onClick={()=>this.props.cancel}to='/'>
                    <button>Cancel</button>
                </Link>
                <Route path='/wizard/step1' component={StepOne}/>
                <Route path='/wizard/step2' component={StepTwo}/>
                <Route path='/wizard/step3' component={StepThree}/>
            </div>
        )
    }
}

export default connect(null, {cancel})(Wizard);