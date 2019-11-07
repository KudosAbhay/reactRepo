import React from 'react';
import logo from './logo.svg';
import './App.css';

class Thankyou extends React.Component {

    render(){
        return(
            <div className="App">
            <header>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <span>
                Thank you {this.props.location.state.username} for visiting this Site!
            </span>
            </div>
        );
    }
}

export default Thankyou;