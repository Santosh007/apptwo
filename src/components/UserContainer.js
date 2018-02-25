import User from './User';
import { connect } from 'react-redux';
import {userJoined, userLeft, openInfo} from '../actions';


const mapStateToProps = (state) => {

	return {
		name: state.user.name,
		email: state.user.email,
		authenticated: state.user.authenticated
	}

}

const mapDispatchToProps = dispatch => (
  {
    join(user){
			if(user.name) {
				dispatch(
					userJoined(user.name, user.email, user.authenticated)
				)
			} else{
				dispatch(
					openInfo("Invalid user name",true)
				)
			}
    },
    leave(user){
      dispatch(
				userLeft(user.name, user.email, user.authenticated)
			)
    }
  }
)



const Container = connect(mapStateToProps,mapDispatchToProps)(User)

export default Container
