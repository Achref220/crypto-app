import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import PostReducer from './postReducer';

const rootReducer = combineReducers({ UserReducer, PostReducer });
export default rootReducer;