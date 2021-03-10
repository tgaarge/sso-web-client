import { combineReducers } from 'redux'

import userReducer from './account/user_reducer'
import viewReducer from './view'

const rootReducer = combineReducers({
    userReducer,
    viewReducer
});

export default rootReducer;