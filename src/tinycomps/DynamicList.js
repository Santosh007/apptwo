import React, {Component} from 'react';
import {List, ListItem, ListItemText} from 'material-ui/List';

class DynamicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message : "",
      messages : ["Hello","world"]
    };
  }

  render() {
    return (
      <div>
      <List>
        <ListItem>one</ListItem>
        <ListItem>two</ListItem>
        <ListItem>three</ListItem>
      </List>
      <TextField></TextField>
      </div>
    );
  }
}

export default DynamicList;
