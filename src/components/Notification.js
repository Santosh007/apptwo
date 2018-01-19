import Notify from './Notify';
import { connect } from 'react-redux';
import {closeInfo} from '../actions';

const mapStateToProps = (state) => {
	return {
		message: state.info.message,
		open: state.info.open
	}
}

const mapDispatchToProps = dispatch => (
  {
    close(info){
      dispatch(
				closeInfo(info.message, info.open)
			)
    }
  }
)

const Notification = connect(mapStateToProps,mapDispatchToProps)(Notify)

export default Notification
