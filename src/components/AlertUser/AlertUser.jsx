import React, { Component } from 'react';


class AlertUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            alert: ""
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() { 
        return ( 
            <form onSubmit={this.props.coolAlert}>
                <input name="alert" onChange={this.handleChange} value={this.state.alert} />
                <button>Click Me</button>
            </form>
         );
    }
}

    

 
export default AlertUser;