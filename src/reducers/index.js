import counterReducer from './counter'
import personReducer from './person'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    person: personReducer
})

export default allReducers