import {applyMiddleware, combineReducers, createStore} from 'redux';
import { logginReducer } from './reducers/loginReducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const store = createStore(combineReducers({user: logginReducer}), applyMiddleware(...middlewares));

export default store;