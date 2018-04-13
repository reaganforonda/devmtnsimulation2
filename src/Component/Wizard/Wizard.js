import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Wizard extends Component{
    constructor(props){
        super(props);

        this.state = {
            name : '',
            address : '',
            city : '',
            state : '',
            zipcode : 0
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // Update State based on input fields
    handleInputChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    render(){
        return (
            <div>
                Wizard Component
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                    <div>
                    <input onChange={(e)=>this.handleInputChange(e)} name='name' value={this.state.name} placeholder='Name'/>
                    <input onChange={(e)=>this.handleInputChange(e)} name='address' value={this.state.address} placeholder='Address'/>
                    <input onChange={(e)=>this.handleInputChange(e)} name='city' value={this.state.city} placeholder='City'/>
                    <input onChange={(e)=>this.handleInputChange(e)} name='state' value={this.state.state} placeholder='State'/>
                    <input onChange={(e)=>this.handleInputChange(e)} name='zipcode' value={this.state.zipcode} placeholder='Zipcode'/>
                    </div>
            </div>
        )
    }
}