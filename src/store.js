import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

let enhancer;

if (process.env.NODE_ENV === 'development') {
  enhancer = composeWithDevTools(applyMiddleware(...middleware));
} else {
  enhancer = compose(applyMiddleware(...middleware));
}

const store = createStore(rootReducer, initialState, enhancer);

export default store;
