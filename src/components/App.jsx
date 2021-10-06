import React, { Component } from 'react';
import DisplayNames from './DisplayNames/DisplayNames';
import NameList from './NameList/NameList'
import AlertUser from './AlertUser/AlertUser';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {firstName: 'Reggie', lastName: 'White', 
        names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        };
    }



    render(){
    return (
        <div>
            <h1>Name</h1>
            <hr />
            <DisplayNames nameOne={this.state.firstName} />
            <DisplayNames nameTwo={this.state.lastName} />
            <ol>Names</ol>
            <hr />
            <NameList fiveNames={this.state.names}/>
            <hr />
            <AlertUser />
        </div>
    )
    }
}
export default App;