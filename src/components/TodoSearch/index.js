import React from "react";
import "./TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue, loading }) => {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
};
export { TodoSearch };
