import User from './User';
import { connect } from 'react-redux';
import C from '../constants';


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
      dispatch({
        type:C.USER_JOINED,
        payload : {
          name : user.name,
          email : user.email,
          authenticated : user.authenticated
        }
      })
    },
    leave(user){
      dispatch({
        type:C.USER_LEFT,
        payload : {
          name : user.name,
          email : user.email,
          authenticated : user.authenticated
        }
      })
    }
  }
)



const Container = connect(mapStateToProps,mapDispatchToProps)(User)

export default Container
