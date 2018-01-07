import C from '../constants';
import {combineReducers} from 'redux';

export const message = (state=null, action) =>
   (action.type === C.SEND_MESSAGE || action.type === C.RECEIVE_MESSAGE) ?
   action.payload :
   state;

export const user = (state=null, action) =>{
  switch (action.type) {
    case C.USER_JOINED:
      return action.payload;
    case C.USER_LEFT:
      return action.payload;
    default:
      return state;
  }
}

export const buddy = (state=null, action) =>
    (action.type === C.BUDDY_JOINED) ?
    action.payload :
    state;


export const errors = (state=[], action) =>{
  switch (action.type) {
    case C.ADD_ERROR:
      return [...state,action.payload];
    case C.CLEAR_ERROR:
      return state.filter((err,i)=> i !== action.payload);
    default:
      return state;
  }
}

export const messages = (state=[], action)  => {
  console.log('Inside reducers '+JSON.stringify(action.type));
  switch (action.type) {
    case C.SEND_MESSAGE:
      //const messageExists = state.some(message => message.id === action.payload.id)
      return (messageExists(state,action)) ?
       state :
       [...state,message(null,action)];
    case C.RECEIVE_MESSAGE:
      //const messageExists = state.some(message => message.id === action.payload.id)
      return (messageExists(state,action)) ?
       state :
       [...state,message(null,action)];
    case C.REMOVE_MESSAGE:
       return state.filter((message)=> message.id !== action.payload);
    default:
      return state;
  }
}

const messageExists = (state,action) => {
  return state.some(message => message.id === action.payload.id);
}

export const buddies = (state=[],action) => {
    switch (action.type) {
      case C.BUDDY_JOINED:
        const buddyExists = state.some(b => b.email === action.payload.email);
        return (buddyExists) ?
          state :
          [...state, buddy(null,action)]
      case C.BUDDY_LEFT:
         return state.filter((b) => b.email !== action.payload.email);
      default:
          return state;
    }
}

export default combineReducers({
  user,
  messages,
  buddies,
  errors
});
