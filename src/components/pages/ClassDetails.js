import React from 'react';

const ClassDetails = ({ match }) => {
  const { id } = match.params;

  return (
    <div>
      <h2>Class Details</h2>
      <p>Class ID: {id}</p>
    </div>
  );
};

export default ClassDetails;
