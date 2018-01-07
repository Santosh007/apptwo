import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  height: 200,
  width: '100%'
};

const User = ({ name="", email="", authenticated=false,leave=f=>f,join=f=>f }) =>{

  let _name, _email

  const submit = e => {
    join({
      name : _name.value,
      email : _email.value,
      authenticated : true
    });
  }

  const logout = e => {
    leave({
      name : "",
      email : "",
      authenticated : false
    });
  }

  const handleNameChange = (event) => {
      _name.value= event.target.value;
  }

  const handleEmailChange = (event) => {
      _email.value= event.target.value;
  }

  return (
    <div>
        { authenticated ?
          (
            <Card style={style}>
            <CardHeader
            title={name}
            subtitle={email}
            />
            <CardActions>
              <RaisedButton label="Leave" secondary={true} fullWidth={true} onClick = {logout}/>
            </CardActions>
            </Card>
          )
          :
          (
            <Card>
            <CardText>
              <TextField
                ref={input => _name = input}
                hintText="name"
                fullWidth={true}
                onChange={handleNameChange}
              />
              <TextField
                ref={input => _email = input}
                hintText="email"
                fullWidth={true}
                onChange={handleEmailChange}
              />
            </CardText>
            <CardActions>
              <RaisedButton label="Join" primary={true} fullWidth={true} onClick ={submit}/>
            </CardActions>
            </Card>
          )
        }
    </div>
  )
}

User.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    authenticated: PropTypes.bool,
    leave: PropTypes.func,
    join: PropTypes.func
}

export default User
