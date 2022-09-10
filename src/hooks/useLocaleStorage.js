import { useEffect, useReducer, useState } from "react";

const initialState = (initialValue) => ({
  loading: false,
  sincronized: true,
  item: initialValue,
  error: false,
  errorMessage: "",
});

const actionTypes = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  SAVE: "SAVE",
  SINCRONIZE: "SINCRONIZE",
  DEFAULT: "DEFAULT",
};

const reducer = (state, action) =>
  ({
    [actionTypes.ERROR]: {
      ...state,
      error: true,
      errorMessage: action.payload,
    },
    [actionTypes.SUCCESS]: {
      ...state,
      item: action.payload,
      loading: false,
      sincronized: true,
    },
    [actionTypes.SAVE]: {
      ...state,
      item: action.payload,
    },
    [actionTypes.SINCRONIZE]: {
      ...state,
      loading: true,
      sincronized: false,
    },
    [actionTypes.DEFAULT]: {
      ...state,
    },
  }[action.type || actionTypes.DEFAULT]);

export const useLocalStorage = (itemName, initialValue) => {
  const [{ sincronized, item, loading, error }, dispatch] = useReducer(
    reducer,
    initialState(initialValue)
  );

  // Action Creators
  const onError = (error) =>
    dispatch({
      type: actionTypes.ERROR,
      payload: error,
    });

  const onSuccess = (item) =>
    dispatch({
      type: actionTypes.SUCCESS,
      payload: item,
    });

  const onSave = (item) =>
    dispatch({
      type: actionTypes.SAVE,
      payload: item,
    });

  const onSincronize = (item) =>
    dispatch({
      type: actionTypes.SINCRONIZE,
    });

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 2000);
  }, [sincronized]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  return { item, saveItem, loading, error, sincronizeItem: onSincronize };
};
