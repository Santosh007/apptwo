import C from './constants';

export function userJoined(name, email, authenticated=true){
    return {
      type : C.USER_JOINED,
      payload : {name, email, authenticated}
    }
}

export const userLeft = (name="", email="", authenticated=false) =>({
    type : C.USER_LEFT,
    payload : {name, email, authenticated}
})

export function sendMessage(msg){
  return {
    type : C.SEND_MESSAGE,
    payload : msg
  }
}

export function receiveMessage(message){
  let msg = JSON.parse(message.data);
  let date = new Date();
  msg.id = date.getTime();
  msg.type = "received";
  return {
    type : C.RECEIVE_MESSAGE,
    payload : msg
  }
}

export function removeMessage(id){
  return {
    type : C.REMOVE_MESSAGE,
    payload : id
  }
}

export function addError(error){
  return {
    type: C.ADD_ERROR,
    payload : error
  }
}

export function clearError(index){
  return {
    type : C.CLEAR_ERROR,
    payload : index
  }
}

export const openInfo = (message="",open=true) => {
  return {
    type : C.OPEN_INFO,
    payload : {message, open}
  }
}

export const closeInfo = (message="",open=false) => {
  return {
    type : C.CLOSE_INFO,
    payload : {message, open}
  }
}

export function buddyJoined(name,email){
  return {
    type : C.BUDDY_JOINED,
    payload : {name,email}
  }
}

export function buddyLeft(name, email){
  return {
    type : C.BUDDY_LEFT,
    payload : {name, email}
  }
}
