import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import emoticons from '../utils/emoticons.css';

const Emoticons = (open=false,send=f=>f, cancel=f=>f) => {

  const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={handleClose}
      />,
    ];

    const handleClose = e => {
      alert("works...");
    }

  return (
    <div>
      <Dialog
          title="Scrollable Dialog"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >

      </Dialog>
    </div>
  )
}

Emoticons.propTypes = {
  open :PropTypes.bool,
  send: PropTypes.func,
  cancel: PropTypes.func
}

export default Emoticons;
