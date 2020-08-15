import React from "react";
import { connect } from "react-redux";
import { setThemeCreator} from "../../redux/appCommonReducer";
import Header from "./Header";


let mapStateToProps = (state) => {
  return {
    lightTheme: state.appCommon.lightTheme
  };
};

let mapDispatchToState = (dispatch) => {
  return {
    setTheme: () => {
      dispatch(setThemeCreator());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToState)(Header);
