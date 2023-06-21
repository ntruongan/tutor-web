import React from "react";

// eslint-disable-next-line no-unused-vars, react/prop-types
const StudentDetails = ({ match }) => {
  // eslint-disable-next-line react/prop-types
  const { id } = match.params;

  return (
    <div>
      <h2>Student Details</h2>
      <p>Student ID: {id}</p>
    </div>
  );
};

export default StudentDetails;
