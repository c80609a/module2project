import {TOGGLE_FRIEND} from "../constants/actions";

const toggleFriend = (id) => {
  return {
    type: TOGGLE_FRIEND,
    id:   id
  }
}

export default toggleFriend