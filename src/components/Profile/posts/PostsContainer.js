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
const PostsContainer = connect(mapStateToProps, {
  changeText:changeTextCreator,
  addPost:addPostCreator
})(Posts);
export default PostsContainer;
