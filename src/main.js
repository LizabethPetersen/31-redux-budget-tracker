import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render as renderDom } from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import combineReducers from './reducer/main';
import reporter from './lib/middleware/redux-reporter';
import session from './lib/middleware/redux-session';
import './style/main.scss';

const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(reporter, session)));

const root = document.createElement('div');
document.body.appendChild(root);

renderDom(<Provider store={store}><App /></Provider>, root);
