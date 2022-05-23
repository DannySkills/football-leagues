import React from "react";

const Header = () => {
  return (
    <div className="main-header">
      <h1>Football Leagues</h1>
      <ul className="clean-list flex">
        <li>
          <a href="/" className="clean-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="clean-link gap">
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
