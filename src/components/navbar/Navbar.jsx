import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import Button from "../buttons/Button";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/movie-context">WatchList</Link>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/movie-context">WatchList</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
          </ul>
          <Link to="/add">
            <Button>
              <FontAwesomeIcon icon="add" className="icon" />
              Add
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
