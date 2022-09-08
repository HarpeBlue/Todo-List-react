import React from "react";
import "./TodoList.css";

const TodoList = ({
  searchedTodos,
  error,
  loading,
  onError,
  onLoading,
  onEmpty,
  render,
}) => {
  return (
    <section className="TodoList-container">
      {error && onError()}
      {loading && onLoading()}
      {!loading && !searchedTodos.length && render()}
      <ul>{searchedTodos.map(render)}</ul>
    </section>
  );
};
export { TodoList };
