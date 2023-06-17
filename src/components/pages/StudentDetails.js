import React from 'react';

const StudentDetails = ({ match }) => {
  const { id } = match.params;

  return (
    <div>
      <h2>Student Details</h2>
      <p>Student ID: {id}</p>
      </div>
  );
};

export default StudentDetails;
