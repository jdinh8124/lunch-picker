import React from 'react';

export default function Filters(props) {

  return (
    <div className="d-flex">
      <div>
        <button className="btn-outline-primary">Type</button>
        <button className="btn-outline-primary ml-3">Location</button>
        <button className="btn-outline-primary ml-3">Budget</button>
      </div>
      <div className=" offset-5">
        <button className="btn-primary">Spin</button>
      </div>
    </div>
  );
}
