import React from "react";

import "./TodoCounter.css";

const TodoCounter = ({ totalTodos, completedTodos, loading }) => {
  return (
    <h2
      className={`TodoCounter${!!loading && "--loading"}`}
    >{`Has completado ${completedTodos} de ${totalTodos} TODOs`}</h2>
  );
};

export { TodoCounter };
