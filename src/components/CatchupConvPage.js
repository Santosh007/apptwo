import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import {socket} from '../apis/CatchupConvApi';

class CatchupConvPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lastMsgId : '',
      scrollToLast : true,
      received : false,
      receivedMsg : '',
      open : false,
      name : '',
      messages : []
    };
  }

  sendMsg = function(event){
    if (event.keyCode === 13){
      let date = new Date();
      let msgId = date.getTime();
      //alert(year.concat(month.concat(day)));
      let message = {
        id : msgId,
        type : 'sent',
        content : this.state.name,
        sender : 'Santosh',
        received : '',
        rcontent : '',
        rsender : '',
        rreceived : '',
        isemo : false
      }

      this.setState({
        name: "",
        lastMsgId : msgId
       });

      socket.send(JSON.stringify(message));
      this.setState(prevState => ({
        messages: [...prevState.messages, message]
      }));
      //alert(this.lastMsgId);
      //if(msgId){
        //this.refs[msgId].scrollIntoView({block: 'end', behavior: 'smooth'});
      //}
    }
  }

  render(){
    socket.onmessage = function(payload){
      //alert(JSON.parse(payload.data));
      let date = new Date();
      let message = JSON.parse(payload.data);
      message.id = date.getTime();
      message.type = "received";
      this.setState(prevState => ({
        messages: [...prevState.messages, message]
      }));
      this.setState({
        lastMsgId : message.id
       });
       if(message.id){
        this.refs[message.id].scrollIntoView();
       }
    }.bind(this);

    const style = {
      centerStyle : {
        minHeight: '60vh',
        width : '100%'
      },
      listStyle : {
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        maxHeight: '57vh'
      },
      receivedMsgStyle : {
        marginBottom : 10,
        backgroundColor: "papayawhip",
        backgroundSize: 'initial',
        width: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px'
      },
      sentMsgStyle : {
        marginBottom : 10,
        backgroundColor: 'rgba(45, 179, 111, 0.35)',
        marginLeft: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px'
      },
      msgWriterStyle : {
        minHeight : '5vh',
        width: '90%',
        textAlign: 'center',
        display: 'inline-block',
        marginLeft : 10
      },
      writer : {
        width : '100%',
        minHeight: '5vh',
        marginTop : 10,
        textAlign: 'bottom',
        paddingBottom:0
      }
    };

    return (
      <div style = {{padding : 10}}>
        <div>
          <Paper style={style.centerStyle} zDepth={1}>
            <List style = {style.listStyle}>
              {this.state.messages.map(item => (
                (() => {
                switch (item.type) {
                        case "sent":   return  <div ref={item.id} key = {item.id}><ListItem key = {item.id} style = {style.sentMsgStyle} primaryText = {`${item.content}`}/></div>;
                        case "received": return <div ref={item.id} key = {item.id}><ListItem key = {item.id} style = {style.receivedMsgStyle} primaryText = {`${item.content}`}/></div>;
                }
              })()
              ))}
            </List>
          </Paper>
        </div>
        <Paper style = {style.writer} zDepth={2}>
          <TextField value={this.state.name}
           style = {{marginLeft : 10}}
           onChange={e => this.setState({ name: e.target.value })}
           fullWidth = {true} underlineShow={false}
           hintText="Hint Text"
           onKeyDown={this.sendMsg.bind(this)}/>
        </Paper>
      </div>
    );
  }

}

export default CatchupConvPage;
