import {ADD_FRIEND} from "../constants/actions";

const addFriend = (id) => {
  return {
    type: ADD_FRIEND,
    id:   id
  }
}

export default addFriend