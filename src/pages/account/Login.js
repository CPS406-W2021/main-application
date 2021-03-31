import React, { Component } from "react";
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class Login extends Component {
    render() {
        return <div>Login!</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
