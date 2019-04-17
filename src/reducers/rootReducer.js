import friendList from './friendList'
import {combineReducers} from 'redux'
import friendCounter from "./friendCounter";

const rootReducer = combineReducers({
  friends: friendList,
  counter: friendCounter
})

export default rootReducer