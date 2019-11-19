import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import Tasks from './Tasks';

// Import routing components
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Tasks} />
            <Route exact path="/tasks" component={Tasks} />
        </div>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
