import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from 'prop-types';

const Notify = ({message="",open=false,close=f=>f}) => {

  const deNotify = e => {
    close({
      message : "",
      open : false
    });
  }

  const requestClose = e => {
    close({
      message : "",
      open : false
    });
  }

  return (
    <div>
      <Snackbar
          open={open}
          message={message}
          action="Close"
          autoHideDuration={4000}
          onActionClick={deNotify}
          onRequestClose={requestClose}
        />
    </div>
  )
}

Notify.propTypes = {
  info: PropTypes.string,
  open: PropTypes.bool,
  close: PropTypes.func
}

export default Notify
