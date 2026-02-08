import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Students() {
  const [Students, setStudents] = useState([
    {
      name: "yousaf",
      email: "ysf@gmail.com",
      age: 20,
    },
  ]);
  const Navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((res) => setStudents(res.data))
      .catch((error) => console.log(error));
  });

  function handledelete(id) {
    axios
      .delete(`http://localhost:5000/deletestudent/${id}`, { id })
      .then((res) => {
        Navigate("/");
        console.log("deleted user: ", res);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="table-responsive w-50 bg-white rounded p-3">
          <Link to="/createuser" className="btn btn-success">
            Register
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Students.map((Student) => {
                return (
                  <tr>
                    <td>{Student.name}</td>
                    <td>{Student.email}</td>
                    <td>{Student.age}</td>
                    <td>
                      <Link
                        to={`/update/${Student.id}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={(e) => handledelete(Student.id)}
                        className="btn btn-success"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Students;
