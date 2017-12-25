import React, {Component} from 'react';
import CatchupConvPage from '../components/CatchupConvPage';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

    render(){
      const contentStyle = {
        width: '100%',
      };

      return (
        <div style = {contentStyle}>
          <h2>Home..!</h2>
          <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          >
            <Tab label="Conversation" value={0} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div>
              <CatchupConvPage/>
            </div>
          </SwipeableViews>
        </div>
      );
    }

}

export default Home;
