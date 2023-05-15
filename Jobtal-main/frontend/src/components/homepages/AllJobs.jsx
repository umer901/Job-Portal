import React, { useState, useEffect, useContext, useRef } from "react";
// import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

const AllJobs = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();

  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    fetch("http://localhost:3001/alljobs", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "jobData");
        setData(data.data);
      });
  };

  return (
    <>
      {data.map((i) => {
        return (
          <>
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{i.title}</h4>
                    <h5 className="card-title">{i.company}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {i.location}
                    </h6>
                    <p className="card-text">{i.desc}</p>
                    <a href="/" className="btn btn-primary">
                      Apply for Job
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{i.title}</h4>
                    <h5 className="card-title">{i.company}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {i.location}
                    </h6>
                    <p className="card-text">{i.desc}</p>
                    <a href="/" className="btn btn-primary">
                      Apply for Job
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default AllJobs;
