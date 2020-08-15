import React from "react";

let Post = (props) => (
  <div key={props.id}>
    {props.message}{" "}
    <div>
      <button>like</button>
      <span> {props.likes}</span>
    </div>
  </div>
);
export default Post;
