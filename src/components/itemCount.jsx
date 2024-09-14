import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";

const ItemCount = ({ productId }) => {
  const [countItem, setCountItem] = useState(1);
  const { count, setCount } = useContext(CartContext);

  const handleAdd = () => {
    setCountItem(countItem + 1);
  };

  const handleRemove = () => {
    if (countItem > 1) {
      setCountItem(countItem - 1);
    }
  };

  const handleAddProductToCart = () => {
    if (!Array.isArray(count)) {
      console.error("count is not an array");
      return;
    }

    const newProduct = {
      id: productId,
      quantity: countItem,
    };

    setCount((prevCount) => {
      const existingProductIndex = prevCount.findIndex(item => item.id === productId);

      if (existingProductIndex !== -1) {
        const updatedCount = [...prevCount];
        updatedCount[existingProductIndex].quantity += countItem;
        return updatedCount;
      } else {
        return [...prevCount, newProduct];
      }
    });

    setCountItem(1);
  };

  return (
    <div>
      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <Button onClick={handleRemove}>-</Button>
        <span>{countItem}</span>
        <Button onClick={handleAdd}>+</Button>
      </div>
      <Button onClick={handleAddProductToCart}>Agregar al Carrito</Button>
    </div>
  );
};

export default ItemCount;
