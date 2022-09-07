import React from "react";
import { TodoIcon } from "../TodoIcon";

export const CompleteIcon = ({ completed, onComplete }) => {
  return (
    <TodoIcon color={completed && "#4caf50"} onClick={onComplete}></TodoIcon>
  );
};
