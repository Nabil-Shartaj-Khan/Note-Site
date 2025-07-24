import React from "react";

const FilterBar = ({ filter, setFilter }) => {
  const types = ["all", "quiz", "assignment", "exam"];

  return (
    <div className="btn-group mb-4">
      {types.map((type) => (
        <button
          key={type}
          className={`btn btn-${filter === type ? "dark" : "outline-dark"}`}
          onClick={() => setFilter(type)}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
