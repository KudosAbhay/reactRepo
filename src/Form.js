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
        let nam = event.target.name;
        let val = event.target.value;
        
        this.setState({
          [nam]: val
        });
    }

    handleSubmit(event) {
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
        }
        event.preventDefault();
    }

    render(){
        return (
            <div className="Form">
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Enter your Name:
                        <input
                            type="text"
                            name="username"
                            onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Number of guests:
                        <input
                            type="number"
                            name="numberOfGuests"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Select your Flavor:
                        <select name="flavor" value = {this.state.flavor} onChange = {this.handleInputChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type = "submit" value = "Submit" />
                </form>
            </div>
        );            
    }
}

export default Form;
