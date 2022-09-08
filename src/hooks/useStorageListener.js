import React from "react";

export const useStorageListener = (sincronize) => {
  const [storageChange, setStorageChange] = React.useState(false);
  window.addEventListener(
    "storage",
    (change) => {
      change.key === "TODOS_V1" && setStorageChange(true);
    },
    false
  );

  const toggleShow = () => {
    setStorageChange(false);
    sincronize();
  };

  return { show: storageChange, toggleShow };
};
