import React, { useState, useEffect } from "react";

import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("ipl");
  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit + "/hot.json?limit=50")
      .then((res) => {
        if (res.status !== 200) {
          console.warn("Warning: Something is wrong with the api.");
          return;
        }
        res.json().then((data) => {
          if (data != null) setArticles(data.data.children);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [subreddit]);

  return (
    <div className="App">
      <div className="container">
        <Sidebar setSubreddit={setSubreddit} subredaval={subreddit} />
        {articles != null ? <Main articles={articles} /> : ""}
      </div>
    </div>
  );
}

export default App;
