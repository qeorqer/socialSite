import React from "react";
import {
  addPostCreator,
} from "../../../redux/profileReducer";
import Posts from "./Posts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
const PostsContainer = connect(mapStateToProps, {
  addPost:addPostCreator
})(Posts);
export default PostsContainer;
