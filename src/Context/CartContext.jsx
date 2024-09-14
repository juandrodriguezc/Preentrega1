import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState([]);

<<<<<<< HEAD
  const safeSetCount = (updateFn) => {
    setCount((prev) => {
      if (Array.isArray(prev)) {
        return updateFn(prev);
      } else {
        console.error("State 'count' is not an array");
        return prev;
      }
    });
  };

  return (
    <CartContext.Provider value={{ count, setCount: safeSetCount }}>
=======
  return (
    <CartContext.Provider value={{ count, setCount }}>
>>>>>>> cc3f161414698375a8422a3f52e175ce364abbf3
      {children}
    </CartContext.Provider>
  );
};
