import React from "react";
import Jobseekers from "./Jobseekers";
import Recruiter from "./Recruiter";
import JobsData from "./JobsData";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../homepages/navbar.module.css";

function Sidebar() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2 text-center">
        <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
        <span className="brand-name fs-4">Admin Dashboard</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        {/* <a className="list-group-item py-2 ">
          <i className="bi bi-house fs-5 me-3"></i>
          <span>Home</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-table fs-5 me-3"></i>
          <span>Job Seekers</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-clipboard-data fs-5 me-3"></i>
          <span>Employers</span>
        </a> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center ">
          <nav className="navbar navbar-light bg-light">
            <a className={styles["nav-link"]} href="/">
              Home
            </a>
            {/* <hr/> */}
            <a className={styles["nav-link"]} href="/jobseekers">
              Job Seekers
            </a>
            {/* <hr/> */}
            <a className={styles["nav-link"]} href="/recruiter">
              Employers
            </a>
            <a className={styles["nav-link"]} href="/jobsdata">
              Jobs Posted
            </a>
          </nav>
        </nav>
      </div>
    </div>
  );
}
export default Sidebar;
