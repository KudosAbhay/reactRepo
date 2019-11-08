import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <div className="container">
            <div class="row">
              <div class="col text-center">
                {/* <button class="btn btn-default">Centered button</button> */}
                <button onClick={this.handleClick} type="button" className="btn btn-outline-success">
                    Log In
                </button>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
