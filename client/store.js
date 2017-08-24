import { createStore, compose, applyMiddleware  } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { rootReducer } from './reducers/'

import comments from './data/comments'
import posts from './data/posts'

const defaultState = {
  comments,
  posts
}

const store = createStore(rootReducer, defaultState, devToolsEnhancer());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
