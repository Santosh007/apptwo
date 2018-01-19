import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavDrawerAppBar from '../components/NavDrawerAppBar';
import Notification from '../components/Notification';
import {Main} from '../tinycomps/TemplateComps';

injectTapEventPlugin();
class Template extends Component {

    render(){
      const background = {
        backgroundColor: "#fafafa"
      }

      return (
        <MuiThemeProvider>
          <div style = {background}>
            <NavDrawerAppBar/>
            <Main>
              {this.props.children}
            </Main>
            <Notification/>
          </div>
        </MuiThemeProvider>
      );
    }

}

export default Template;
