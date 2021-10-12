import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <ul>
          <li>
            <a href="/r/popular" class="active">
              Popular
            </a>
          </li>
          <li>
            <a href="/r/hot">Hot</a>
          </li>
          <li>
            <a href="/r/rising">Rising</a>
          </li>
          <li>
            <a href="/r/controversial">Controversial</a>
          </li>
          <li>
            <a href="/r/trending">Trending</a>
          </li>
        </ul>
      </div>
      <div className="header__right">
        <i className="fas fa-bell"></i>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU"
          alt=""
        />
        <div className="header__user">
          <span>Aseem Anand</span>
          <i className="fas fa-caret-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
