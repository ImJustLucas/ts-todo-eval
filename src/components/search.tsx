import React, { useContext } from "react";
import { TodoContext } from "../contexts/todo.context";


const Search: React.FC = () => {
  const { query } = useContext(TodoContext);

  return (
    <div>
      <input
        type="text"
        value={query.get}
        onChange={(e) => query.set(e.target.value)}
        placeholder="Enter your search query"
      />
    </div>
  );
};

export default Search;
