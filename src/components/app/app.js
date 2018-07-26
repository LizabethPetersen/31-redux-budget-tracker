import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../landing/landing';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <h1>Lab 32: Budget App</h1>
            <Route exact path='/' component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );  
  }
}
