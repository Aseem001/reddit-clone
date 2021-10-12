import React from "react";
import Header from "../header/Header";
import Posts from "../posts/Posts";
import "./main.css";

function Main(props) {
  return (
    <div className="main">
      <Header />
      <Posts posts={props.articles} />
    </div>
  );
}

export default Main;
