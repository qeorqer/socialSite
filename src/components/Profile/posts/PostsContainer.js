import React from "react";
import {
  addPostCreator,
  changeTextCreator,
} from "../../../redux/profileReducer";
import Posts from "./Posts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    changeText: (text) => {
      let action = changeTextCreator(text);
      dispatch(action);
    },
    addPost: () => {
      let action = addPostCreator();
      dispatch(action);
    },
  };
};
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
