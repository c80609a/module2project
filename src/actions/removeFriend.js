import {REMOVE_FRIEND} from "../constants/actions";

const removeFriend = (id) => {
  return {
    type: REMOVE_FRIEND,
    id:   id
  }
}

export default removeFriend