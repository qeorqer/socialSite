import React from "react";
import Post from "./post/Post";
import classes from "./Posts.module.css";
import AddPostForm from "./AddPostForm";
import {postDataType} from "../../../redux/types/types";
export type addPostValuesType = {
    post:string
}
type propsType = {
    addPost: (post:string) => void
    posts: Array<postDataType>
}
const Posts:React.FC<propsType> = (props) => {
    let postItems = props.posts.map((el) => (
        <Post message={el.message} likes={el.likes} id={el.id} key={el.id}/>
    ));

    let addPost = (values:addPostValuesType) => {
        props.addPost(values.post);
    };

    return (
        <div className={classes.postsBlock}>
            <h2>my posts</h2>

            <AddPostForm onSubmit={addPost}/>
            <div className={classes.posts}>{postItems}</div>
        </div>
    );
};

const PostsMemorized = React.memo(Posts);
export default PostsMemorized;
