
import React from 'react'
import { connect } from 'react-redux'

import TextField from 'material-ui/TextField';
import actions from '../constants'

function mapStateToProps(state) {
    return {
        input: state.input
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //onChange: (e) => dispatch({ type: actions.INPUT_CHANGED, data: e.target.value }),
        onKeyDown: function(e) {
            if(13 === e.keyCode) {
              let date = new Date();
              let msgId = date.getTime();
              //alert(year.concat(month.concat(day)));
              let message = {
                id : msgId,
                type : 'sent',
                content : e.target.value,
                sender : 'Santosh',
                received : '',
                rcontent : '',
                rsender : '',
                rreceived : '',
                isemo : false
              }
                dispatch({ type: actions.SEND_MESSAGE, payload: message })
            }
        }
    }
}

class Input extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TextField fullWidth={true}
                underlineShow={false}
                style = {{marginLeft : 10}}
                hintText="Chat message..."
                value={this.props.input}
                {...this.props} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
