import React from 'react';
import {logInThunkCreator} from "../../redux/authReducer";
import {connect} from "react-redux";
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";


const Login = props => {
    let style = `
    .inner {
  grid-template-areas: 
  "hdr hdr"
  "cnt cnt";
  grid-template-rows: 120px 1fr;
  grid-template-columns: 1fr 5fr;
  grid-gap: 10px;
  max-width: 1200px;
    margin: 0 auto;
}
nav{
display:none
}
   `
    const onSubmit = formData => {
        props.logIn(formData.email,formData.password,formData.rememberMe);
    }
    if(props.isAuth){
        return  <Redirect to='/profile'/>
    }
    return (
        <div className="loginPage">
            <h1>Login</h1>
            <LoginForm onSubmit ={onSubmit} logIn = {props.logIn}/>

            <style>
                {style}
            </style>
        </div>
    )
}
let mapStateToProps = (state) => (
    {
    isAuth: state.auth.isAuth
    }
)
export default connect(mapStateToProps,{
    logIn: logInThunkCreator
})(Login);