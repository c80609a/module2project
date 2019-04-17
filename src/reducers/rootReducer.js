import friendList        from './friendList'
import {combineReducers} from 'redux'
import friendCounter     from "./friendCounter";
import messagesList      from "./messagesList";
import selectedFriend    from "./selectedFriend";

const rootReducer = combineReducers({
  friends:        friendList,
  counter:        friendCounter,
  messages:       messagesList,
  selectedFriend: selectedFriend
})

export default rootReducer