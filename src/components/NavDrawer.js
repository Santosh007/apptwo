import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {Link} from 'react-router';
import AuthButton from './components/AuthButton';

class NavDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false,authenticated : true};
  }
  handleToggle = () => this.setState({open: !this.state.open});
  render(){
    return (
        <div>
          <FloatingActionButton onTouchTap = {this.handleToggle}>
            <Menu/>
          </FloatingActionButton>
          <Drawer open = {this.state.open}>
            <AuthButton/>
            <Divider/>
            <Link to={'/'}>
            <MenuItem
              onTouchTap = {this.handleToggle}
              primaryText = {'Chat'}
            />
            </Link>
            <Link to={'/play'}>
            <MenuItem
              onTouchTap = {this.handleToggle}
              primaryText = {'Play'}
            />
            </Link>
            <Link to={'/Music'}>
            <MenuItem
              onTouchTap = {this.handleToggle}
              primaryText = {'Music'}
            />
            </Link>
            <Link to={'/profile'}>
            <MenuItem
              onTouchTap = {this.handleToggle}
              primaryText = {'Profile'}
            />
            </Link>
          </Drawer>
        </div>
  );
  }
}

export default NavDrawer;
