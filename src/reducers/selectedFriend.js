import {TOGGLE_FRIEND} from "../constants/actions";

const selectedFriend = (state = null, action) => {
  switch (action.type) {
    case TOGGLE_FRIEND:
      return (action.id === state) ? null : action.id
    default:
      return state
  }
}

export default selectedFriend