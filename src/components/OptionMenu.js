import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

class OptionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.item = props;
  }

  handleItemClick = (event, child) => {
    console.log(this.item.content);
  }

  render() {
    const iconButtonElement = (
      <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );

    return (
      <IconMenu iconButtonElement={iconButtonElement}
        onItemClick={this.handleItemClick}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
      </IconMenu>
    )
  }
}

export default OptionMenu;
