import React from "react";

type propsType = {
    message: string
    likes: number
    id: number
}

let Post: React.FC<propsType> = (props) => (
  <div>
    {props.message}{" "}
    <div>
      <button>like</button>
      <span> {props.likes}</span>
    </div>
  </div>
);
export default Post;
