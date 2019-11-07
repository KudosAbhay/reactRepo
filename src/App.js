import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  handleClick = () => {
    this.props.history.push("/login");
  }

  render(){
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body>
          <div className="input-group">
              <span className="input-group-btn">
                <button onClick={this.handleClick} type="button">
                  Log In
                </button>
              </span>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
