import React, { Component } from 'react';
import DisplayNames from './DisplayNames/DisplayNames';
import NameList from './NameList/NameList'
import AlertUser from './AlertUser/AlertUser';
import SuperHeroTable from './SuperHeroTable/SuperHeroTable';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {firstName: 'Reggie', lastName: 'White', 
        names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
        superHeroes: [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondarAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondarAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondarAbility: 'Shoots web'
            }
        ]
        
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
            <hr />
            <SuperHeroTable heroTable={this.state.superHeroes} />
        </div>
    )
    }
}
export default App;