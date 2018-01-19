import appReducer from './reducers';
import {receiveMessage,userLeft,openInfo} from '../actions';
import C from '../constants';
import {compose, createStore, applyMiddleware } from 'redux';

var websocket = null;

const consoleMessages = store => next => action => {

	let result

	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log(`message payload =>  ${JSON.stringify(action.payload)}`)
	console.log('messages', store.getState().messages.length)

	result = next(action)

	let { messages, buddies, errors} = store.getState()

	console.log(`

		messages : ${messages.length}
		buddies: ${buddies.length}
		errors: ${errors.length}

	`)

	console.groupEnd()

	return result

}

const wsmiddleware = store => next => action => {
  switch (action.type) {
    // User request to connect
    case C.USER_JOINED:
      // Configure the object
			//"ws://node-websocket-app2ws.7e14.starter-us-west-2.openshiftapps.com"
			//action.payload.url
      websocket = new WebSocket("ws://node-websocket-app2ws.7e14.starter-us-west-2.openshiftapps.com");

      // Attach the callbacks
      //websocket.onopen = () => store.dispatch({ type: 'WEBSOCKET:OPEN' });
			websocket.onopen = () => {
				store.dispatch(openInfo("Joined...!",true));
			}
      //websocket.onclose = (event) => store.dispatch({ type: 'WEBSOCKET:CLOSE', payload: event });
			websocket.onclose = (event) =>{
				store.dispatch(userLeft());
				store.dispatch(openInfo("Left......",true));
				//alert("Left..."+JSON.stringify(event))
			}
      websocket.onmessage = (message) => {
				store.dispatch(receiveMessage(message));
			}

      break;

    // User request to send a message
    case C.SEND_MESSAGE:
      websocket.send(JSON.stringify(action.payload));
      break;

    // User request to disconnect
    case C.USER_LEFT:
      websocket.close();
      break;

    default: // We don't really need the default but ...
      break;
  };

  return next(action);
};

export default (initialState={}) => {
	return compose(applyMiddleware(consoleMessages,wsmiddleware))(createStore)(appReducer, initialState)
}
