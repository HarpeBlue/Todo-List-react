import React from "react";
import "./TodoList.css";

const TodoList = ({
  searchedTodos,
  error,
  loading,
  totalTodos,
  searchValue,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchResults,
  render,
  children,
}) => {
  return (
    <section className="TodoList-container">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !totalTodos && onEmptyTodos()}
      {!!totalTodos &&
        !searchedTodos.length &&
        onEmptySearchResults(searchValue)}
      <ul>{!loading && !error && searchedTodos.map(render || children)}</ul>
    </section>
  );
};
export { TodoList };
