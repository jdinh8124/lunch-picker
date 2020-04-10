import React from 'react';

export default function Filters(props) {

  return (
    <div className="d-flex">
      <div>
        <button className="btn-primary">Type</button>
        <button className="btn-primary ml-3">Location</button>
        <button className="btn-primary ml-3">Budget</button>
      </div>
      <div className="btn-primary offset-5">
        <button>Spin</button>
      </div>
    </div>
  );
}
