import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName'

class App extends Component {
    constructor(props){
        super(props);
        this.list = [
            {name: "Mike"},
            {name: "Nevin"},
            {name: "Aaron"},
            {name: "Tory"},
            {name: "Kelly"}
        ]
        this.state = {firstName: 'Reggie',
        lastName: 'White'
        };
    }

render(){
    return (
        <div>
            <DisplayName />
        </div>
    )
}
}