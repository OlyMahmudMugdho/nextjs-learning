import React from "react";


type Post = {
    post  :any
}
function Post({ post }: Post) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
