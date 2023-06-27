// rootReducer.js
import { legacy_createStore } from 'redux';
import  dataReducer from './reducer';

const rootReducer = legacy_createStore(dataReducer);

export default rootReducer;
