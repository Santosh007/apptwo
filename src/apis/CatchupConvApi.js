import root from 'window-or-global';

const hst =  root.location.host;
const pth = root.location.pathname;
const proto = root.location.protocol;

//const catchupConvUrl = (proto === 'https:') ? 'wss://'+hst+pth+uname : 'ws://'+hst+pth+uname ;
export const socket = new WebSocket("ws://localhost:3001");
