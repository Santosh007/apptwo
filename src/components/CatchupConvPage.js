import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Input from './Input';
import ConvPage from './ConvPage';
import Emotions from './Emotions';

class CatchupConvPage extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    const style = {
      writer : {
        width : '100%',
        minHeight: '5vh',
        marginTop : 10,
        textAlign: 'bottom',
        paddingBottom:0,
      }
    };

    return (
      <div style = {{padding : 10}}>
        <div>
          <ConvPage/>
        </div>
        <Paper style = {style.writer} zDepth={2}>
          <Input/>
          <Emotions/>
        </Paper>
      </div>
    );
  }

}

export default CatchupConvPage;
