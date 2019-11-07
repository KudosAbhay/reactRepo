import React from 'react';
import logo from './logo.svg';
import Form from './Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form />,
    </div>
  );
}

export default App;
