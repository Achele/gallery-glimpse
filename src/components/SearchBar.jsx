import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { SearchIcon } from "./Icon";

const SearchBar = () => {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleIconClick = () => {
    handleSearch();
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(`/search/${query}`);
    }
  };

  return (
    <>
      <input
        type="search"
        value={query}
        onChange={handleSearchInput}
        onKeyUp={handleKeyUp}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
        className="border-2 bg-white border-white rounded-lg p-2 text-lg outline-none w-3/4 my-0 mx-auto bg-transparent "
        placeholder="Search for photo"
      />
      {/* <SearchIcon
        className="absolute right-10 text-gray-300 cursor-pointer "
        onClick={handleIconClick}
      /> */}
    </>
  );
};

export default SearchBar;
