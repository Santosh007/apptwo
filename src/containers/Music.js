import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    padding: 10,
  },
  base : {
    width : '100%',
  }
};

class Music extends Component {

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
      return (
        <div style = {styles.base}>
          <h2>Music..!</h2>
          <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          >
            <Tab label="Explore" value={0} />
            <Tab label="Playing" value={1} />
            <Tab label="Recent" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={styles.slide}>
            slide n°1
          </div>
          <div style={styles.slide}>
            slide n°2
          </div>
          <div style={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>
        </div>
      );
    }

}

export default Music;
