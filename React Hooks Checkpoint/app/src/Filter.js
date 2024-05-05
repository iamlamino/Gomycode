import React, { useState } from "react";

const Filter = ({
  filteredBy,
  setFilteredBy,
  filterTitleValue,
  setFilterTitlevalue,
  filterRatingValue,
  setFilterRatingvalue,
}) => {
  return (
    <>
      <div>
        <select
          value={filteredBy}
          onChange={(e) => setFilteredBy(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="rating">Rating</option>
        </select>
        {filteredBy === "title" ? (
          <input
            type="text"
            placeholder="Search by title"
            value={filterTitleValue}
            onChange={(e) => setFilterTitlevalue(e.target.value)}
          />
        ) : (
          <input
            type="number"
            placeholder="Filter by rating"
            min="0"
            max="10"
            step="0.1"
            value={filterRatingValue}
            onChange={(e) => setFilterRatingvalue(Number(e.target.value))}
          />
        )}
      </div>
    </>
  );
};

export default Filter;
