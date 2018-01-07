import root from 'window-or-global';

const hst =  root.location.host;
const pth = root.location.pathname;
const proto = root.location.protocol;

//const catchupConvUrl = (proto === 'https:') ? 'wss://'+hst+pth+uname : 'ws://'+hst+pth+uname ;
/*export const socket = function (uname){
  const catchupConvUrl = (proto === 'https:') ? 'wss://'+hst+pth+uname : 'ws://'+hst+pth+uname ;
  return new WebSocket(catchupConvUrl);
}*/
export const socket = new WebSocket("ws://node-websocket-app2ws.7e14.starter-us-west-2.openshiftapps.com");
