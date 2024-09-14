import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";

const ItemCount = ({ productId }) => {
  const [countItem, setCountItem] = useState(1);
<<<<<<< HEAD
=======

>>>>>>> cc3f161414698375a8422a3f52e175ce364abbf3
  const { count, setCount } = useContext(CartContext);

  const handleAdd = () => {
    setCountItem(countItem + 1);
  };

  const handleRemove = () => {
<<<<<<< HEAD
    if (countItem > 1) {
      setCountItem(countItem - 1);
    }
  };

  const handleAddProductToCart = () => {
    if (!Array.isArray(count)) {
      console.error("count is not an array");
      return;
    }

=======
    setCountItem(countItem - 1);
  };

  const handleAddProductToCart = () => {
>>>>>>> cc3f161414698375a8422a3f52e175ce364abbf3
    const newProduct = {
      id: productId,
      quantity: countItem,
    };
<<<<<<< HEAD

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
=======
    if (count.length === 0) {
      setCount([newProduct]);
    } else {
      count.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + countItem,
          };
        } else {
          setCount([...count, newProduct]);
        }
      });
    }
>>>>>>> cc3f161414698375a8422a3f52e175ce364abbf3

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

<<<<<<< HEAD
export default ItemCount;
=======
export default ItemCount;
>>>>>>> cc3f161414698375a8422a3f52e175ce364abbf3
