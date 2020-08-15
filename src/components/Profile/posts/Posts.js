import React from "react";
import Post from "./post/Post";
import classes from "./Posts.module.css";

let Posts = (props) => {
 
  let postItems = props.profilePage.postsData.map((el) => (
    <Post message={el.message} likes={el.likes} id={el.id} key={el.id} />
  ));

  let addPost = () => {
    props.addPost();
  };
  let changeText = (e) => {
    let text = e.target.value;
    props.changeText(text);
  };
  return (
    <div className={classes.postsBlock}>
      <h2>my posts</h2>

      <div className={classes.addPost}>
        <p>Add post</p>
        <textarea
          onChange={changeText}
          value={props.profilePage.newPostText}
          placeholder ="Write your thoughts"
        />
        <button onClick={addPost}>Add new</button>
      </div>
      <div className={classes.posts}>{postItems}</div>
    </div>
  );
};
export default Posts;
