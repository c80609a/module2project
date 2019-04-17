import friendList from './friendList'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  friends: friendList
})

export default rootReducer