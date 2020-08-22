import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const WithAuthRedirect = (Component) => {

    let mapStateToProps = (state) => ({
            isAuth: state.auth.isAuth
        }
    )

    const redirectComponent = props => {


        if (!props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...props} />
    }

    let connectedAuthRedirectContainer = connect(mapStateToProps)(redirectComponent);

    return connectedAuthRedirectContainer;
}

export default WithAuthRedirect