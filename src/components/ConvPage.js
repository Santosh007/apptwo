import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/send';
import {List, ListItem} from 'material-ui/List';

const centerStyle = {
  height: 400,
  width: '50%',
  minWidth:400,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block'
};

const msgWriterStyle = {
  width: '46%',
  minWidth:345,
  margin: 10,
  textAlign: 'bottom',
  display: 'inline-block'
};

const holderStyle = {
  textAlign : 'center'
};

function sendMsg(){
  let hst=  window.location.host;
	let pth= window.location.pathname;
	let proto = window.location.protocol;
  alert(hst);
  alert(pth);
}

const conversationHolder = function(){
  return (<div>
    <div>
      <Paper zDepth={1}>
        <List>
          <ListItem primaryText="Inbox" />
          <ListItem primaryText="Starred" />
          <ListItem primaryText="Sent mail" />
          <ListItem primaryText="Drafts" />
          <ListItem primaryText="Inbox" />
        </List>
      </Paper>
    </div>
    <div>
      <TextField
        multiLine={true}
        rows={1}
        rowsMax={3}
        hintText="Write message....."/>
        <FloatingActionButton onClick = {sendMsg}>
          <ContentAdd />
        </FloatingActionButton>
    </div>
  </div>);
}

export default conversationHolder;
