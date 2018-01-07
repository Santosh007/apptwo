import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class AuthButton extends Component {
  render(){
    const style = {
      marginTop: 0,
    };
    const isLoggedIn = this.props.authenticated;

    let button = null;
    if (isLoggedIn) {
      button = <RaisedButton label="Leave" secondary={true} fullWidth={true}/>;
    } else {
      button = <RaisedButton label="Join" primary={true} fullWidth={true}/>;
    }

    return (
      <div>{button}</div>
    )
  }
}

export default AuthButton;
