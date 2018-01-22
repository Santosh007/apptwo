import React from 'react';
import { connect } from 'react-redux';
import Scrollbars from 'react-scrollbar';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

function mapStateToProps(state) {
    return {
        messages: state.messages
    }
}

class ConvPage extends React.Component {
    constructor(props) {
        super(props);
        this.count = 0;
        this.height = 0
        this.top = 0;
        this.autoScroll = true;
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll(scrollData){
      console.log(scrollData);
      this.height = scrollData.realHeight;
      if(scrollData.topPosition < this.top){
        this.autoScroll = false;
      }else{
        this.top = scrollData.topPosition;
      }
    }

    componentDidUpdate() {
      const { scrollbars } = this.refs;
      if(this.autoScroll){
        scrollbars.scrollYTo(this.height);
      }
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
              <Scrollbars ref="scrollbars"
                style={{ height: '60vh' }}
                onScroll={this.handleScroll}
                horizontal={false}
                smoothScrolling={true}
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
