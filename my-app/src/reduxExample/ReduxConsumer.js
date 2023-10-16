import { connect } from "react-redux";
import { loginActionCreator } from "../redux-store/actionCreators/loginActionCreator";

function ReduxConsumer({user, loginActionCreator}){
    console.log(user);
    return <div>
        {user.user}
        <button onClick={e=>loginActionCreator('sachin')}>Change User</button>
    </div>
}

const mapStateToProps = (store)=>{
    console.log(store);
    return {
        user: store.user
    }
}
export default connect(mapStateToProps, {loginActionCreator})(ReduxConsumer);

