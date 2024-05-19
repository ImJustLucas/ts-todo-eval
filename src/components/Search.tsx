import React, { useContext } from "react";
import { TodoContext } from "../contexts/todo.context";
import { Input } from "@material-tailwind/react";

const Search: React.FC = () => {
  const { query } = useContext(TodoContext);

  return (
    <div className="py-4">
      <Input
        type="text"
        value={query.get}
        onChange={(e) => query.set(e.target.value)}
        variant="standard"
        label="Search"
        placeholder="Enter your search query"
        size="lg"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
      />
    </div>
  );
};

export default Search;
