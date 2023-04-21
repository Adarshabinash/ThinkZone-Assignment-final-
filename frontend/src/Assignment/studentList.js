import React, { useEffect, useState } from "react";
import StudentForm from "./studentForm";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [student, setStudent] = useState(null);

  const deleteThisData = (data) => {
    axios
      .delete(`http://localhost:5000/${data._id}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        window.location.reload();
      });
  };

  const editForm = (data) => {
    axios
      .get(`http://localhost:5000/${data._id}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setStudent(res.data);
        setShowStudentForm(true);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000", { "Content-Type": "application/json" })
      .then((res) => {
        setStudents(res.data);
      });
  }, []);

  const onSubmit = (data) => {
    if (data._id) {
      axios
        .patch(
          `http://localhost:5000/${data._id}`,
          { ...data },
          { "Content-Type": "application/json" }
        )
        .then((res) => {
          window.location.reload();
        });
    } else {
      axios
        .post(
          "http://localhost:5000",
          { ...data },
          { "Content-Type": "application/json" }
        )
        .then((res) => {
          window.location.reload();
        });
    }
  };

  const showStudetForm = () => {
    setShowStudentForm(true);
  };

  return (
    <div>
      <h1>Get all the student data here</h1>
      <br />
      <hr />
      <br />
      <button onClick={showStudetForm}>Create New Student</button>
      {showStudentForm ? (
        <StudentForm
          closeForm={() => setShowStudentForm(false)}
          onSubmit={onSubmit}
          student={student}
        />
      ) : students && students.length ? (
        students.map((items) => {
          return (
            <div>
              {items.name}
              <button onClick={() => editForm(items)}>Edit</button>
              <button
                onClick={() => {
                  deleteThisData(items);
                }}
              >
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <div>No records found</div>
      )}
    </div>
  );
};

export default StudentList;
