import { combineReducers } from 'redux';
import firstreducer from './reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    firstreducer,
    formReducer
})