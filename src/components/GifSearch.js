import React, { useState } from "react";

export default function GifSearch({ onSubmitQuery }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitQuery(query);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="search">Enter a Search Term:</label>
          <input
            id="search"
            className="form-control"
            type="text"
            value={query}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Find Gifs
        </button>
      </form>
    </div>
  );
}
