import React from 'react';
import {logInThunkCreator} from "../../redux/authReducer";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";
import './login.css';
import {StateAppType} from "../../redux/store";

type mapStateToPropsType = {
    isAuth: boolean
    captcha: string | null
}
type mapDispatchToPropsType = {
    logIn: (email:string, password: string, rememberMe: boolean,captcha: string | null) => void
}
export type loginFormValuesType = {
    email:string
    password: string
    rememberMe: boolean
    captcha: string | null
}
const Login:React.FC<mapStateToPropsType & mapDispatchToPropsType> = ({logIn, isAuth,captcha}) => {
    let style = `
    .inner {
  grid-template-areas: 
  "hdr hdr"
  "cnt cnt";
}
nav{
display:none
}
   `
    const onSubmit = (formData:loginFormValuesType):void => {
        logIn(formData.email, formData.password, formData.rememberMe,formData.captcha);
    }
    if (isAuth) {
        return <Redirect to='/profile'/>
    }
    return (
        <div className="loginPage">
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} captcha = {captcha}/>

            <style>
                {style}
            </style>
        </div>
    )
}
let mapStateToProps = (state:StateAppType):mapStateToPropsType => (
    {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
)
export default connect(mapStateToProps, {
    logIn: logInThunkCreator
})(Login);