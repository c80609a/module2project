import {SEND_MESSAGE} from "../constants/actions";

const sendMessage = (friendId, message) => {
  return {
    type:    SEND_MESSAGE,
    id:      friendId,
    message: message
  }
}

export default sendMessage