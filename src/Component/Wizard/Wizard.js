import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Wizard extends Component{
    constructor(props){
        super(props);

        this.state = {}
    }
    render(){
        return (
            <div>
                Wizard Component
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
            </div>
        )
    }
}