import React from "react";
import PostItem from "../postItem/PostItem";

function Posts(props) {
  //   let base_url = "https://reddit.com";

  return (
    <div className="posts">
      {props.posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
    // <article>
    //   <a
    //     href={base_url + props.article.permalink}
    //     target="_blank"
    //     rel="noreferrer"
    //   >
    //     <h3>{props.article.title}</h3>
    //   </a>
    // </article>
  );
}

export default Posts;
