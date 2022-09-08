import React from "react";
import { useStorageListener } from "../../hooks/useStorageListener";

export const ChangeAlert = ({ sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize);

  return (
    show && (
      <div>
        <p>Hubo cambios...</p>
        <button onClick={toggleShow}>Volver a cargar la indormacion</button>
      </div>
    )
  );
};
