import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = ({ setOpenModal }) => {
  const onClickButton = (event) => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
};
export { CreateTodoButton };
