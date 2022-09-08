import { useEffect, useState } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const [sincronized, setSincronized] = useState(true);
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
        setItem(parsedItem);
        setLoading(false);
        setSincronized(true);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    }, 2000);
  }, [sincronized]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincronized(false);
  };
  return { item, saveItem, loading, error, sincronizeItem };
};
