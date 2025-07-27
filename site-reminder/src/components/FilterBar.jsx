import React from "react";

const FilterBar = ({ filter, setFilter }) => {
  const types = ["all", "quiz", "assignment", "exam"];

  return (
    <div className="mb-4 d-flex align-items-center">
      <label className="me-3 fw-semibold" htmlFor="filter-buttons">
        Filter notes by:
      </label>
      <div id="filter-buttons" className="btn-group">
        {types.map((type) => (
          <button
            key={type}
            className={`btn btn-${filter === type ? "primary" : "outline-primary"}`}
            onClick={() => setFilter(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
