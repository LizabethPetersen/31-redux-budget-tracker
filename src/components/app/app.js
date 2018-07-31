import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../landing/landing';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <h1>My Budget</h1>
              <Route exact path='/' component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
