import React, { useState } from "react";

function Search({ getQuery }) {
  const [text, setText] = useState("");
  // send query args from Search component to App component
  const onChange = (query) => {
    setText(query);
    getQuery(query);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          autoFocus
          value={text}
          //   event parameter will take the input and update
          //   the state when we will type something
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
}

export default Search;
