import React, { useContext } from "react";
import logo from "./logo.png";
import homeimg2 from "./homeimg2.jpg";
import LogoutButton from "./logoutbutton";
import LoginButton from "./loginbutton";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./navbar.module.css";
import { UserContext } from "../../App";

const Navbar = (props) => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const resume = () => {
    navigate("/resume");
  };

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/searchJobSeeker">
              Search Job
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/postjob">
              Post Job
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/logout">
              Logout
            </a>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/searchJobSeeker">
              Search Job
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/postjob">
              Post Job
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/logout">
              Logout
            </a>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <nav className="navbar navbar-light bg-light">
          <a className={styles["navbar-brand"]} href="/">
            <img src={logo} width="90" height="80" alt="" />
          </a>
        </nav>

        <div
          className="collapse navbar-collapse navbar-nav"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <RenderMenu />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
