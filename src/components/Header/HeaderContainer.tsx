import React from "react";
import { connect } from "react-redux";
import { action} from "../../redux/appCommonReducer";
import Header from "./Header";
import { logOutThunkCreator} from "../../redux/authReducer";
import {StateAppType} from "../../redux/store";

type mapStateToProps = {
  darkTheme: boolean
  isAuth: boolean
}
type mapDispatchToProps = {
  setTheme: () => void
  logOut: (userId?:number) => void
}
type propsType = mapStateToProps & mapDispatchToProps;
class headerContainer extends  React.Component<propsType> {

  render(){
    return <Header {...this.props}/>
  }
}
let mapStateToProps = (state:StateAppType):mapStateToProps => {
  return {
    darkTheme: state.appCommon.darkTheme,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, {
  setTheme:action.setThemeCreator,
  logOut:logOutThunkCreator
})(headerContainer);
