import C from './constants';

export function sendMessage(id,type,content,sender,received="",rcontent="",rsender="",rreceived="",isemo=false){
  return {
    type : C.SEND_MESSAGE,
    payload : { id,type,content,sender,received,rcontent,rsender,rreceived,isemo}
  }
}

export function receiveMessage(msg){
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
