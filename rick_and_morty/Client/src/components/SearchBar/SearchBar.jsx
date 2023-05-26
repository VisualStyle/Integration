import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [id, setID] = useState("");

  const handleChange = (event) => {
    setID(event.target.value);
  };

  return (
    <div>
      <input type="search" onChange={handleChange} value={id} />
      <button
        onClick={() => {
          onSearch(id);
          setID("");
        }}
      >
        Agregar
      </button>
    </div>
  );
};
export default SearchBar;
