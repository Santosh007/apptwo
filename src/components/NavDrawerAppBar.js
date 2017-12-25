import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Chat from 'material-ui/svg-icons/communication/chat';
import Play from 'material-ui/svg-icons/av/games';
import Music from 'material-ui/svg-icons/image/audiotrack';
import Profile from 'material-ui/svg-icons/social/person';

const styles = {
  linkStyle: {
    textDecoration: 'none',
  },
  base : {
    width : '100%',
  }
};

class NavDrawerAppBar extends Component{
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  render(){
    const titleStyle = {
      textAlign: 'center'
      };

    return(
      <div>
        <AppBar
          title="Title"
          titleStyle = {titleStyle}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick = {this.handleToggle}
        />
        <Drawer
          docked={false}
          open = {this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <div
          style = {
            { height: '200px',
              width: '100%',
              backgroundColor : '#E57373',
          }}
          ></div>
          <Divider/>
          <Link style = {styles.linkStyle} to={'/'}>
          <MenuItem
            onTouchTap = {this.handleToggle}
            primaryText = {'Chat'}
            leftIcon={<Chat/>}
          />
          </Link>
          <Link style = {styles.linkStyle} to={'/play'}>
          <MenuItem
            onTouchTap = {this.handleToggle}
            primaryText = {'Play'}
            leftIcon={<Play />}
          />
          </Link>
          <Link style = {styles.linkStyle} to={'/Music'}>
          <MenuItem
            onTouchTap = {this.handleToggle}
            primaryText = {'Music'}
            leftIcon = {<Music/>}
          />
          </Link>
          <Link style = {styles.linkStyle} to={'/profile'}>
          <MenuItem
            onTouchTap = {this.handleToggle}
            primaryText = {'Profile'}
            leftIcon = {<Profile/>}
          />
          </Link>
        </Drawer>
      </div>

    );
  }

}

export default NavDrawerAppBar;
