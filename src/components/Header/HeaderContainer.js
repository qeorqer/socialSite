import React from "react";
import { connect } from "react-redux";
import { setThemeCreator} from "../../redux/appCommonReducer";
import Header from "./Header";


let mapStateToProps = (state) => {
  return {
    lightTheme: state.appCommon.lightTheme
  };
};

export default connect(mapStateToProps, {
  setTheme:setThemeCreator
})(Header);
