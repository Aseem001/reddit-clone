import React from "react";
import "./Sidebar.css";
const Sidebar = (props) => {
  const menus = [
    { to: "/r/popular", text: "Popular" },
    { to: "/r/all", text: "All" },
    { to: "/r/random", text: "Random" },
  ];
  const subreddits = [
    "askreddit",
    "worldnews",
    "cricket",
    "funny",
    "ipl",
    "gaming",
    "crypto",
    "bitcoin",
    "movies",
    "memes",
    "science",
    "soccer",
    "internet",
    "jokes",
    "quotes",
    "technology",
    "computer",
    "india",
    "smartphone",
    "software",
  ];
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img
          src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1.png"
          alt=""
        />
      </div>
      <div className="sidebar__search">
        <input
          type="text"
          name="search"
          placeholder="Search"
          onChange={(e) => props.setSubreddit(e.target.value)}
          value={props.subreddit}
        />
        <i className="fas fa-search"></i>
      </div>
      <div className="sidebar__link">
        <ul className="sidebar__menu">
          {menus.map((menu) => (
            <li>
              <a href={menu.to}>{menu.text}</a>
            </li>
          ))}
        </ul>
        <hr />
        <ul className="sidebar__subreddit">
          {subreddits.map((subreddit) => (
            <li>
              <a href={`/r/${subreddit}`}>{subreddit}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
