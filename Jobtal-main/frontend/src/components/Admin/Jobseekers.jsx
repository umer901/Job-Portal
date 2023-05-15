import React, { uComponent, useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Jobseekers = ({ userData }) => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = () => {
    fetch("http://localhost:3001/jobseeker", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };

    const deleteUser = (id, name) => {
      if (window.confirm(`Are you sure you want to delete ${name}`)) {
        fetch("http://localhost:3001/deleteUser", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            userid: id,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            alert(data.data);
            getAllUser();
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
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">User Type</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {data.map((i) => {
          return (
            <tr>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.userType}</td>
              <td>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => deleteUser(i._id, i.name)}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Jobseekers;
