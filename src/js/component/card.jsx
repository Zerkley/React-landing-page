import React from "react";

const Card = () => {
  return (
    <div className="card my-3 mx-auto" style={{ width: "18rem" }}>
      <svg
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="180"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Image cap"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
          520 x 235
        </text>
      </svg>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          eius dicta quae? Laboriosam, reiciendis ratione. Et quisquam fugiat
          sapiente sint, quasi enim laudantium quod quae maxime sequi distinctio
          neque odit.
        </p>
        <a href="#" className="btn btn-primary">
          Find out more!
        </a>
      </div>
    </div>
  );
};

export default Card;
