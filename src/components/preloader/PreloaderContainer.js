import React from "react";
import { connect } from "react-redux";
import { setThemeCreator} from "../../redux/appCommonReducer";
import Preloader from "./Preloader";


let mapStateToProps = (state) => {
  return {
    lightTheme: state.appCommon.lightTheme
  };
};

let mapDispatchToState = (dispatch) => {
  return {}
  };
  
export default connect(mapStateToProps, mapDispatchToState)(Preloader);
