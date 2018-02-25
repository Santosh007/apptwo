import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

const MessageOptions = ({ id = '',reply=f=>f,forward=f=>f,delete=f=>f}) => {

  const iconButtonElement = (
    <IconButton
      touch={true}
      tooltip="more"
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon color={grey400} />
    </IconButton>
  );

  const handleReply = e => {

  }

  const handleForward = e => {

  }

  const handleDelete = e => {

  }


  return (
    <div>
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem onItemClick = {handleReply} >Reply</MenuItem>
        <MenuItem onItemClick = {handleForward} >Forward</MenuItem>
        <MenuItem onItemClick = {handleDelete} >Delete</MenuItem>
      </IconMenu>
    </div>
  )
}

MessageOptions.propTypes = {
  id : PropTypes.string,
  reply : PropTypes.func,
  forward : PropTypes.func,
  delete : PropTypes.func
}

export default MessageOptions
