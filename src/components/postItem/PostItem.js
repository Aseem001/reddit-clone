import React from "react";
import "./PostItem.css";

function PostItem(props) {
  const { title, subreddit, ups, author, url, num_comments, permalink } =
    props.post.data;
  let base_url = "https://reddit.com";
  return (
    <div className="post">
      <div className="post__left">
        <i className="fas fa-caret-up"></i>
        <span>{ups}</span>
        <i className="fas fa-caret-down"></i>
      </div>
      <div className="post__center">
        <img src={url} alt="" />
      </div>
      <div className="post__right">
        <h3>
          <a href={`${base_url + permalink}`} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
        <span className="post__info">
          submitted an hour ago by <a href={`/u/${author}`}>{author}</a> to{" "}
          <a href={`/r/${subreddit}`}>{subreddit}</a>
        </span>
        <p className="post__info">
          {num_comments} comments | share | save | hide | report
        </p>
      </div>
    </div>
  );
}

export default PostItem;
