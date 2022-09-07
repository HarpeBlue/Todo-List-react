import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoForm.css";

export const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal((prevState) => !prevState);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal((prevState) => !prevState);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Escribe tu nuevo TODO
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Cortar la cebolla para el almuerzo"
        />
      </label>
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Annadir
        </button>
      </div>
    </form>
  );
};
