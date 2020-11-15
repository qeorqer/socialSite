import React from "react";
import {
    addPostCreator,
} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {postDataType} from "../../../redux/types/types";
import {StateAppType} from "../../../redux/store";


type MapStateToPropsType = {
    posts: Array<postDataType>
}
type MapDispatchToPropsType = {
    addPost: (post: string) => void
}
type PropsType = MapDispatchToPropsType & MapStateToPropsType;

let mapStateToProps = (state: StateAppType): MapStateToPropsType => {
    return {
        posts: state.profilePage.postsData,
    };
};
export default connect(mapStateToProps, {
    addPost: addPostCreator
})(Posts);
