import React from 'react';
import { connect } from 'react-redux';
import Scrollbars from 'react-custom-scrollbars';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import {socket} from '../apis/CatchupConvApi';
import {receiveMessage} from '../actions';
import actions from '../constants'

function mapStateToProps(state) {
    return {
        messages: state.messages
    }
}

class ConvPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      const style = {
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
        }
      };

        return (
            <Paper zDepth={1}>
              <Scrollbars
                style={{ minHeight: '60vh' }}
                >
                  <List subheader="Chat Log" ref="conv">
                        {this.props.messages.map(item => (
                          (() => {
                          if(null !== item)
                          switch (item.type) {
                                  case "sent":   return <ListItem key = {item.id} style = {style.sentMsgStyle} primaryText = {`${item.content}`}/>;
                                  case "received": return <ListItem key = {item.id} style = {style.receivedMsgStyle} primaryText = {`${item.content}`}/>;
                          }
                        })()
                        ))}
                    </List>
                  </Scrollbars>
                </Paper>
        )
    }
}

export default connect(mapStateToProps)(ConvPage)
