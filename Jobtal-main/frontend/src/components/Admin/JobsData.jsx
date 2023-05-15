import React, { uComponent, useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JobsData = ({ userData }) => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();

  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    fetch("http://localhost:3001/jobsdata", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "jobData");
        setData(data.data);
      });
  };

    const deleteJob = (id) => {
      if (window.confirm(`Are you sure you want to delete the job?`)) {
        fetch("http://localhost:3001/deleteJob", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            jobid: id,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            alert(data.data);
            getAllJobs();
          });
      } else {
      }
    };
    
  return (
    <>
      <Sidebar />
      <table class="table m-4">
        <thead>
          <tr>
            <th scope="col">Industry</th>
            <th scope="col">Location</th>
            <th scope="col">Job Level</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {data.map((i) => {
          return (
            <tr>
              <td>{i.industry}</td>
              <td>{i.location}</td>
              <td>{i.jobLevel}</td>
              <td>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => deleteJob(i._id)}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default JobsData;
