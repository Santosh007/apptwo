import Emoticons from './Emoticons';
import { connect } from 'react-redux';
import {showEmoticons} from '../actions';

const mapStateToProps = (state) =>{
  return {
    open : state.emoticons.open
  }
}

const mapDispatchToProps = dispatch => (
  {
    send(emoticon){
      dispatch(

      )
    }
  }
)

const Container = connect(mapStateToProps,mapDispatchToProps)(Emoticons)

export default Container
