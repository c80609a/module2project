import {ADD_FRIEND, REMOVE_FRIEND, SEND_MESSAGE} from "../constants/actions";

const initialState = {}

const messagesList = (state = initialState, action) => {
  switch (action.type) {

    case ADD_FRIEND:
      return Object.assign({}, state, {[action.id]: []})

    case REMOVE_FRIEND:
      return state

    case SEND_MESSAGE:
      let stateCopy = Object.assign({}, state)
      stateCopy[action.id].push(action.message)
      return stateCopy

    default:
      return state
  }
}

export default messagesList