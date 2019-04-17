import friendList        from './friendList'
import {combineReducers} from 'redux'
import friendCounter     from "./friendCounter";
import messagesList      from "./messagesList";

const rootReducer = combineReducers({
  friends:  friendList,
  counter:  friendCounter,
  messages: messagesList
})

export default rootReducer