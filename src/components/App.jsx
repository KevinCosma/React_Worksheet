import React, { Component } from 'react';
import DisplayNames from './DisplayNames/DisplayNames';
import NameList from './NameList/NameList'
import AlertUser from './AlertUser/AlertUser';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {firstName: 'Reggie', lastName: 'White', 
        names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
        };
    }

    showAlert() {
        alert("devCodeCamp")
    }

    render(){
        return (
        <div>
            <h1>Name</h1>
            <hr />
            <DisplayNames nameOne={this.state.firstName} />
            <DisplayNames nameTwo={this.state.lastName} />
            <h1>Names</h1>
            <hr />
            <NameList fiveNames={this.state.names}/>
            <hr />
            <AlertUser coolAlert={this.showAlert}/>
        </div>
    )
    }
}
export default App;