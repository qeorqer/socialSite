import React from "react";
import { connect } from "react-redux";
import { setThemeCreator} from "../../redux/appCommonReducer";
import Header from "./Header";
import {isAuthThunkCreator} from "../../redux/authReducer";

class headerContainer extends  React.Component {
  componentDidMount() {
    this.props.getIsAuth();
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
  getIsAuth: isAuthThunkCreator
})(headerContainer);
