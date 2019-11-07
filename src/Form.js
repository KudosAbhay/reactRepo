import React from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            numberOfGuests: 2,
            flavor: "coconut"
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        //This will be invoked always when there is change in input
        let nam = event.target.name;
        let val = event.target.value;
        
        this.setState({
          [nam]: val
        });
    }

    handleSubmit(event) {
        // This will be invoked on form submit
        if(this.state.username === "") {
            alert("username cannot be empty");
        }else if(this.state.numberOfGuests === "0") {
            alert("Total Number of Guests cannot be 0");
            this.setState({
                "numberOfGuests": 2
            });
        }else if(this.state.flavor === "") {
            alert("Flavor cannot be none");
            this.setState({
                "flavor": "coconut"
            });
        }else {
            console.log(this.state.username);
            console.log(this.state.numberOfGuests);
            console.log(this.state.flavor);
            
            // Pass data and route to thankyou page
            this.props.history.push({
                pathname: '/thankyou',
                state: {
                  username: this.state.username,
                }
              }) 
        }
        event.preventDefault();
    }

    render(){
        return (
            <div className="App">
            <header>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
                <form onSubmit = {this.handleSubmit}>
                    <label> Enter your Name: </label>
                    <input
                            type="text"
                            name="username"
                            onChange={this.handleInputChange} />
                    <br />
                    <label> Number of guests: </label>
                    <input
                            type="number"
                            name="numberOfGuests"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange} />
                    <br />
                    <label> Select your Flavor: </label>
                    <select name="flavor" value = {this.state.flavor} onChange = {this.handleInputChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );            
    }
}

export default Form;
