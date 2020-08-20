import React from "react";
import { connect } from "react-redux";
import { setThemeCreator} from "../../redux/appCommonReducer";
import Header from "./Header";
import Axios from "axios";
import {setUserDataCreator} from "../../redux/authReducer";

class headerContainer extends  React.Component {
  componentDidMount() {
    let baseUrl = `https://social-network.samuraijs.com/api/1.0/auth/me`;
    Axios.get(baseUrl, {withCredentials:true}).then((response) => {
      if(response.data.resultCode === 0){
        let {id, login, email} = response.data.data.login;
        this.props.setUserData(id,login,email);
      }
    });

  }
  render(){
    return <Header {...this.props}/>
  }
}
let mapStateToProps = (state) => {
  return {
    lightTheme: state.appCommon.lightTheme,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, {
  setTheme:setThemeCreator,
  setUserData: setUserDataCreator
})(headerContainer);
