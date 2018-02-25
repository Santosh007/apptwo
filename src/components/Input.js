import React from 'react'
import {
  connect
} from 'react-redux'

import TextField from 'material-ui/TextField';
import {
  sendMessage,
  inputSubmitted,
  inputChanged
} from '../actions'

function mapStateToProps(state) {
  return {
    input: state.input,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch(inputChanged(e.target.value)),
    onKeyDown: function(e) {
        if (13 === e.keyCode) {
            let date = new Date();
            let msgId = date.getTime();
            //alert(year.concat(month.concat(day)));
            let message = {
              id: msgId,
              type: 'sent',
              content: e.target.value,
              sender: 'Santosh',
              received: '',
              rcontent: '',
              rsender: '',
              rreceived: '',
              isemo: false
            }
            dispatch(sendMessage(message));
            dispatch(inputSubmitted());
        }
    }
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return ( <
      TextField underlineShow = {
        false
      }
      style = {
        {
          marginLeft: 10,
          width: '80%'
        }
      }
      hintText = "Chat message..."
      value = {
        this.props.input
      } { ...this.props
      }
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
