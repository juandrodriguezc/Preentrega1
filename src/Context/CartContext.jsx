import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState([]);

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
      {children}
    </CartContext.Provider>
  );
};
