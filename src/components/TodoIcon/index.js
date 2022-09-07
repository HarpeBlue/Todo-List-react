import React from "react";

import CheckSVG from "./Icons/check.svg";
import XSVG from "./Icons/x.svg";

import "./TodoIcon.css";

const iconTypes = {
  check: (color) => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  delete: (color) => (
    <XSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

export const TodoIcon = ({ type, color = "gray", onClick }) => {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
};
