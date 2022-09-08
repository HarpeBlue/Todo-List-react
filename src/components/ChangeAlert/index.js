import React from "react";
import { withStorageListener } from "./withStorageListener";

export const ChangeAlert = ({ show, toggleShow }) => {
  return (
    show && (
      <div>
        <p>Hubo cambios...</p>
        <button onClick={toggleShow}>Volver a cargar la indormacion</button>
      </div>
    )
  );
};

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
