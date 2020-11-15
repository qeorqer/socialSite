import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {StateAppType} from "../redux/store";


let mapStateToPropsForRedirect = (state: StateAppType) => ({
    isAuth: state.auth.isAuth
})
type MapStatePropsType = ReturnType<typeof mapStateToPropsForRedirect>

export const withAuthRedirect = (Component: React.ComponentType) => {
    class RedirectComponent extends React.Component<MapStatePropsType> {
        render() {
            if (!this.props.isAuth ) return <Redirect  to={"/login"}/>

            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}




export default withAuthRedirect;