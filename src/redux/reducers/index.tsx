import {combineReducers} from 'redux';
import dogImageReducer from './dogImageReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  dogImageReducer,
  loginReducer,
});

export default rootReducer;
