import React from "react";

const Jumbotron = () => {
  return (
    <div className="p-5 my-5 mx-5 bg-secondary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          totam similique distinctio! Et dolores facere perspiciatis, tempora
          repellendus cum quisquam soluta blanditiis, a consequuntur atque
          veniam expedita sit quis maiores!
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Call to action!
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
