import {ADD_FRIEND} from "../constants/actions";

const friendCounter = (state = 0, action) => {
  switch(action.type) {
    case ADD_FRIEND:
      return state + 1
    default:
      return state
  }
}

export default friendCounter