import appReducer from './reducers';
import C from '../constants';
import {compose, createStore, applyMiddleware } from 'redux'
import {socket} from '../apis/CatchupConvApi';

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
			websocket.onopen = () => alert("Joined.....!");
      //websocket.onclose = (event) => store.dispatch({ type: 'WEBSOCKET:CLOSE', payload: event });
			websocket.onclose = (event) => alert("Left...!");
      websocket.onmessage = (message) => {
				let msg = JSON.parse(message.data);
      	let date = new Date();
      	msg.id = date.getTime();
      	msg.type = "received";
				store.dispatch({ type: C.RECEIVE_MESSAGE, payload: msg });
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

/*const webSocketMiddleware = store => next => action => {
    if(C.SEND_MESSAGE === action.type) {
        if(null !== socket) {
            socket.send(JSON.stringify(action.payload));
        }
    }
    next(action)
}

const finalCreateStore = compose(
    applyMiddleware(
        consoleMessages,
        webSocketMiddleware
    )
)(createStore)

export default (initialState={}) => {
		return finalCreateStore(appReducer, initialState);
}*/

export default (initialState={}) => {
	return compose(applyMiddleware(consoleMessages,wsmiddleware))(createStore)(appReducer, initialState)
}
