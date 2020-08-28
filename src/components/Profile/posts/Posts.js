import React from "react";
import Post from "./post/Post";
import classes from "./Posts.module.css";
import AddPostForm from "./AddPostForm";

let Posts = (props) => {
 
  let postItems = props.profilePage.postsData.map((el) => (
    <Post message={el.message} likes={el.likes} id={el.id} key={el.id} />
  ));

  let addPost = (values) => {
    props.addPost(values.post);
  };

  return (
    <div className={classes.postsBlock}>
      <h2>my posts</h2>

      <AddPostForm onSubmit = {addPost}/>
      <div className={classes.posts}>{postItems}</div>
    </div>
  );
};

export default Posts;
