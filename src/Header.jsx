import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav style={{ color: "white" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          <li>
            <Link to="/tic-tac">Tic-Tac</Link>
          </li>
          <li>
            <Link to="/first-test">FirstTest</Link>
          </li>
          <li>
            <Link to="/data-test">Data Test</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
