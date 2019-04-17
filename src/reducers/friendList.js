import {ADD_FRIEND, REMOVE_FRIEND} from "../constants/actions";

const initialState = []
const friendList = (state = initialState, action) => {
  let stateCopy

  switch(action.type) {
    case ADD_FRIEND:
      console.log('case ADD_FRIEND:')
      stateCopy = state.slice()
      stateCopy.push({
        id:   action.id,
        name: 'Friend #' + action.id
      })
      return stateCopy

    case REMOVE_FRIEND:
      console.log('case REMOVE_FRIEND:')
      stateCopy = state.slice()
      for (var i = 0; i < stateCopy.length; i++)
        if (stateCopy[i].id === action.id) {
          stateCopy.splice(i, 1)
          break
        }
      return stateCopy

    default:
      return state
  }
}

export default friendList