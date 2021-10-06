import React, { Component } from 'react';


class AlertUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            alert: "devCodeCamp"
         }
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input name="alert" onChange={this.handleChange} value={this.state.alert} />
                <button>Click Me</button>
            </form>
         );
    }
}

    

 
export default AlertUser;